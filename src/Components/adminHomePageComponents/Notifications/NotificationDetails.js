import React from 'react'
import { BASE_URL } from '../../../Pages/Main'
import { RenderContext } from '../../../App'

export const NotificationDetails = ({notification}) => {
  const {apartment, description} = notification;
  const {tenant, owner} = apartment;

  return(
    <div className={"notification-details"} style={{padding: '1rem'}}>
      <h3>Notification details</h3>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{padding: '1rem', maxWidth: '50%'}}>
          <h4>Submitter</h4>
          <p>{owner.name}</p>
          <hr/>
          {tenant !== null && <p><span>{"Tennant: "}</span>{tenant.name}</p>}
          <h4>Contact Info</h4>
          <p><span>{"Email: "}</span>{owner.email}</p>
          <hr/>
          <h4>Description</h4>
          <p>{description}</p>
        </div>
        <div style={{padding: '1rem', backgroundImage: 'url("'+ notification.image +'")', width: '50%',backgroundSize: 'cover'}}/>

      </div>
      <History notificationId={notification.id}/>
    </div>
  )
}

const History = ({notificationId}) => {
  const [history, setHistory] = React.useState([])
  const {state} = React.useContext(RenderContext)
  const {notifications} = state

  React.useEffect(() => {
    fetch(BASE_URL + '/notifications/history/' + notificationId)
      .then(res => res.json())
      .then(data => setHistory(data))
  },[notifications])

  return(
    <div style={{ display: 'flex' , alignItems: 'center', justifyContent: 'space-between', padding: '5rem'}}>
      {history.length > 0 && history.map( (historyItem, i) => (
        <>
          {i !== 0 && <i className="fas fa-arrow-right fa-3x"></i>}
          <div className={historyItem.state.status} style={{margin: '1rem', padding: '1rem'}} style={{color: 'white', borderRadius: '0.5rem' ,boxShadow: '0 0 10px rgba(0,0,0,.25)'}}>
            <div style={{display: 'flex'}}>{toDate(historyItem.date).map( x => <p style={{margin: '1rem'}}>{x}</p>)}</div>
            <h3 style={{margin: '1rem', textAlign: 'center'}}>{historyItem.state.status}</h3>
          </div>
        </>

      ))}
    </div>
  )
}

const toDate = (string) => {
  const splited = string.split('T')
  return [splited[0] , splited[1].split('.')[0]]

}
