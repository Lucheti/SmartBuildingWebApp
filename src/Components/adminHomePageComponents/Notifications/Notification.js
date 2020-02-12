import React from 'react';
import { UpdateNotificationStateButton } from './UpdateNotificationStateButton'
import { changePanelComponentTo } from '../reducers/RenderReducer'
import { NotificationDetails } from './NotificationDetails'
import { RenderContext } from '../../../App'

export const Notification = ({notification}) => {
    const {dispatch} = React.useContext(RenderContext)

    const ShowDetails = e =>{
        dispatch(changePanelComponentTo(() => <NotificationDetails notification={notification} />))
    };

    const {apartment, category} = notification;
    const {consorce, apartmentCode} = apartment;
    const {important} = category;
    const role = window.sessionStorage.role

    if(role === 'admin')
      return(
        <li className={notification.state.status + (notification.category.important? " important" : "")}>
          <div className={'notification-quick-info'}>
            <h4>{consorce.name}</h4>
            <h4>{apartmentCode}</h4>
            <p>{category.name}</p>
          </div>
          <div className="notification-buttons">
            <UpdateNotificationStateButton  notification={notification}/>
            <hr/>
            <button onClick={ShowDetails}>Show details</button>
          </div>

          {/*{important && <div className="important-icon"><i className="fas fa-exclamation-triangle fa-2x"/></div>}*/}
        </li>
      )

    return (
        <li className={notification.state.status + (notification.category.important? " important" : "")}>
            <div className={'notification-quick-info'}>
              <h4>{consorce.name}</h4>
              <h4>{apartmentCode}</h4>
              <p id="category">{category.name}</p>
            </div>
        </li>
    )
}

