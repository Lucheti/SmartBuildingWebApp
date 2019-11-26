import React, {Component} from 'react';
import UpdateNotificationStateButton from "./UpdateNotificationStateButton";
import { ModalContext } from '../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../reducers/ModalReducer'
import { BASE_URL } from '../../../Pages/Main'
var base64 = require('base-64');

export const Notification = ({notification, refresh}) => {

    const modalDispatch = React.useContext(ModalContext)

    const ShowDetails = e =>{
        e.preventDefault();
        modalDispatch({type: SHOW_MODAL, payload: () => <NotificationDetails notification={notification}/>})
    };

    const {apartment, category} = notification;
    const {consorce, apartmentCode} = apartment;
    const {important} = category;

    return (
        <li className={notification.state.status + (notification.category.important? " important" : "")}>
            <div>
            <h4>{consorce.name}</h4>
            <h4>{apartmentCode}</h4>
            <p id="category">{category.name}</p>
                <div className="notification-buttons">
                    <div>
                        {window.sessionStorage.role === "admin" && <UpdateNotificationStateButton  notification={notification} refresh={refresh}/>}
                        {window.sessionStorage.role === "admin" && <input type="submit" value={"show details"} onClick={ShowDetails}/>}
                    </div>
                    {window.sessionStorage.role === "admin" && important && <div className="important-icon"><i className="fas fa-exclamation-triangle fa-2x"/></div>}
                </div>
            </div>
        </li>
    )
}

const NotificationDetails = ({notification}) => {
    const {apartment, description} = notification;
    const {tenant, owner} = apartment;
    const [history, setHistory] = React.useState([])

    React.useEffect(() => {
      fetch(BASE_URL + '/notifications/history/' + notification.id)
        .then(res => res.json())
        .then(data => setHistory(data))
    },[])
    return(
      <div className={"notification-details"} style={{padding: '1rem'}}>
          <h3>Notification details</h3>
        <div>
          <p><span>{"Owner: "}</span>{owner.name}</p>
          {tenant !== null && <p><span>{"Tennant: "}</span>{tenant.name}</p>}
          <p><span>{"Email: "}</span>{owner.email}</p>
          <p><span>{"Description: "}</span>{description}</p>
          {notification.image && <p><span>{"Image: "}</span><img src={base64.decode(notification.image)}/></p>}

        </div>
        <History history={history}/>
      </div>
    )
}

const History = ({history}) => {

  return(
    <div style={{ display: 'flex' , alignItems: 'center', justifyContent: 'space-around'}}>
      {history.length > 0 && history.map( (historyItem, i) => (
        <>
          {i !== 0 && <i className="fas fa-arrow-right fa-3x"></i>}
          <div style={{margin: '1rem', padding: '1rem'}}>
            <p>{toDate(historyItem.date)}</p>
            <p>{historyItem.state.status}</p>
          </div>
        </>

      ))}
    </div>
  )
}

const toDate = (string) => {
  const splited = string.split('T')
  return splited[0] + " " + splited[1].split('.')[0]

}
