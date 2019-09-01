import React, {Component} from 'react';
import Apartment from "./Apartment";
import {Cell, Grid} from "react-mdl";
import ConsorceTools from "./ConsorceTools/ConsorceTools";
import AddApartmentForm from "./ConsorceTools/AddApartmentForm";
import AlertConsorceForm from "./ConsorceTools/AlertConsorceForm";
import Alert from "./Alert";

export const UpdateApartmentsList = React.createContext();

export const ShowAlertConsorceForm = React.createContext();


export default class Consorce extends Component {

    constructor(props){
        super(props);
        this.state = {
            consorce: props.consorce,
            apartments: [],
            alerts: [],
            showApartments: false,
            showAddApartmentForm: false,
            showAlertConsorceForm: false
        }
    }

    componentWillMount() {
        this.updateApartmentList();
        this.getAlerts();
    }

    updateApartmentList = () =>{
        fetch("http://192.168.0.185:8080/admins/consorce/"+this.state.consorce.id+"/apartment",{
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        })
            .then(res => res.json())
            .then(apartments => {
                this.setState({apartments: apartments})
            })
    };

    getAlerts = () => {
        fetch("http://192.168.0.185:8080/alerts/" + this.state.consorce.id,{
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => res.json())
            .then(data => {
                if(data.length > 0) {
                    this.setState({alerts: data})
                }else{
                    this.setState({alerts: []});
                }
                })

    }

    toggleShowAlertConsorceForm = () =>{
        this.setState(prev => {return {showAlertConsorceForm: !prev.showAlertConsorceForm}})
    }


    render() {
        const {consorce,apartments,showApartments,showAddApartmentForm,showAlertConsorceForm,alerts} = this.state;
        const {name} = consorce;
        const {i} = this.props;
        const consorceItem = "consorce-item" + (showApartments? " open " : " ")
        const building = "building building"+(i % 8);
        return (
            <div className={consorceItem}>
                <UpdateApartmentsList.Provider value={this.updateApartmentList}>
                    <ShowAlertConsorceForm.Provider value={this.toggleShowAlertConsorceForm}>
                        <div className={building}/>
                        <div className="title-highlighter">
                            <h2>{name}</h2>
                            <ConsorceTools apartmentsList={this} consorce={consorce}/>
                            <ul style={{padding: 0}}>
                                {alerts.map((alert, i) => (<Alert alert={alert} update={this.getAlerts}/>))}
                            </ul>

                            {showAddApartmentForm && <AddApartmentForm id={consorce.id}/>}
                            {showAlertConsorceForm && <AlertConsorceForm consorce={consorce} update={this.getAlerts}/>}

                            {showApartments &&
                            <ul className="apartments">
                                {apartments.map(apartment => (<Apartment key={apartment.id} apartment={apartment}/>))}
                            </ul>}
                        </div>
                    </ShowAlertConsorceForm.Provider>
                </UpdateApartmentsList.Provider>
            </div>
        )
    }
}
