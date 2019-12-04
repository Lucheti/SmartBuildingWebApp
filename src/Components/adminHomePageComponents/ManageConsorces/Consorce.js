import React from 'react';
import {Apartment} from "./Apartment";
import {ConsorceTools} from "./ConsorceTools/ConsorceTools";
import Alert from "./Alert";
import { BASE_URL } from '../../../Pages/Main'
import { useMoreInfo } from '../../utils/useMoreInfo'
import { Hr } from '../../utils/Hr'
import { useBoolean } from '../../utils/useBoolean'

export const ApartmentsContext = React.createContext();

export const AlertContext = React.createContext();


const Consorce = ({consorce}) => {

    const [apartments, setApartments] = React.useState([])
    const [alerts, setAlerts] = React.useState([])
    const [showApartments, toggleShowApartments] = useBoolean()

    React.useEffect(() => {
        updateApartmentList()
        getAlerts()
    },[])

    const updateApartmentList = () =>{
        fetch(BASE_URL + "/admins/consorce/" + consorce.id + "/apartment")
          .then(res => res.json())
          .then(apartments => setApartments(apartments))
    };

    const getAlerts = () => {
        fetch(BASE_URL + "/alerts/" + consorce.id)
          .then(res => res.json())
          .then(data => setAlerts(data))
    }

    const {name} = consorce;
    const consorceItem = "consorce-item" + (showApartments? " open " : " ")

    return (
        <div className={consorceItem}>
            <ApartmentsContext.Provider value={{update: updateApartmentList, toggle: toggleShowApartments, showApartments: showApartments}}>
                <AlertContext.Provider value={{update: getAlerts, consorce: consorce}}>

                    <div className={'building'} style={{backgroundImage: 'url("'+ consorce.image +'")'}}/>

                    <div className="title-highlighter">

                        <h2>{name}</h2>
                        <ConsorceTools consorce={consorce}/>

                        <Hr/>

                        {alerts.length > 0 &&
                            <ul style={{padding: 0, width: '100%', margin: 0}}>
                                {alerts.map((alert, i) => (
                                    <>
                                        <Alert key={i} alert={alert} update={ getAlerts }/>
                                        { i !== alerts.length && <hr/>}
                                    </>
                                  ))}
                            </ul>
                        }

                        <ul className="apartments" style={useMoreInfo(showApartments)}>
                            {apartments.length > 0?
                              apartments.map(apartment => (<Apartment key={apartment.id} apartment={apartment}/>))
                                :
                              <h4 style={{color: 'rgba(0,0,0,.2)', textAlign: 'center', margin: 0}}>No apartments yet added for this consorce</h4>
                            }
                        </ul>

                    </div>

                </AlertContext.Provider>
            </ApartmentsContext.Provider>
        </div>
    )

}
export default React.memo(Consorce)