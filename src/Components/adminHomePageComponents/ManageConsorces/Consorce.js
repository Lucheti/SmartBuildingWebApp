import React from "react";
import { Apartment } from "./Apartment";
import { ConsorceTools } from "./ConsorceTools/ConsorceTools";
import Alert from "./Alert";
import { BASE_URL } from "../../../Pages/Main";
import { useMoreInfo } from "../../utils/useMoreInfo";
import { Hr } from "../../utils/Hr";
import { useBoolean } from "../../utils/useBoolean";
import "../../../App.css";
import { RenderContext } from "../../../App";
import { ConsorceInfo } from "./ConsorceInfo";
import { showConsorceInfo } from "../reducers/RenderReducer";
import { Alerts } from './Alerts'

export const ApartmentsContext = React.createContext();

export const AlertContext = React.createContext();

const Consorce = ({ consorce }) => {
  const [apartments, setApartments] = React.useState([]);
  const [alerts, setAlerts] = React.useState([]);

  const { state, dispatch } = React.useContext(RenderContext);

  React.useEffect(() => {
    updateApartmentList();
    getAlerts();
  }, []);

  const updateApartmentList = () => {
    fetch(BASE_URL + "/admins/consorce/" + consorce.id + "/apartment")
      .then(res => res.json())
      .then(apartments => setApartments(apartments));
  };

  const getAlerts = () => {
    fetch(BASE_URL + "/alerts/" + consorce.id)
      .then(res => res.json())
      .then(data => setAlerts(data));
  };

  const { name } = consorce;
  const consorceInfoState = state[name] || {open: false, component: () => null}

  return (
    <ApartmentsContext.Provider
      value={{
        update: updateApartmentList,
        toggle: () => dispatch(showConsorceInfo(consorce, () => <Apartments apartments={apartments}/>)),
        showApartments: consorceInfoState.open
      }}
    >
      <AlertContext.Provider value={{ update: getAlerts, consorce: consorce }}>
        <div className={"consorce-wrapper"}>
          <div
            className={"consorce"}
            style={{ backgroundImage: 'url("' + consorce.image + '")' }}
          >
            <div className={"degrade text-overflow"}>
              <h2>{name}</h2>

              {alerts.length !== 0 && (
                <button
                  onClick={() => dispatch(showConsorceInfo(consorce, () => <Alerts alerts={alerts}/>))}
                  className={"alert-button"}
                >
                  {" "}
                  <i className="fas fa-exclamation-triangle fa-2x" />{" "}
                </button>
              )}

            </div>

            <ConsorceTools consorce={consorce} />
          </div>

          <ConsorceInfo
            component={() => consorceInfoState.component()}
            open={consorceInfoState.open}
            consorce={consorce}
          />
        </div>
      </AlertContext.Provider>
    </ApartmentsContext.Provider>
  );
};
export default React.memo(Consorce);

const Apartments = ({apartments}) => (
  <ul className="apartments">
    {apartments.length > 0?
      apartments.map(apartment => (<Apartment key={apartment.id} apartment={apartment}/>))
        :
      <h4 style={{color: 'rgba(0,0,0,.2)', textAlign: 'center', margin: 0}}>No apartments yet added for this consorce</h4>
    }
</ul>
)