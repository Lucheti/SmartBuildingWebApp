import React, {Component} from 'react';
import Chart from "../../Test/Chart";
import { NotificationList } from './Notifications/NotificationList'
import '../../App.css'

const getAdminInfo = () => {
    return fetch("http://localhost:8080/admins/" + window.sessionStorage.id, {
        method: 'GET',
        headers: {
        }
    })
}


export const GeneralView = () => {

    const [admin, setAdmin] = React.useState('')

    React.useEffect(() => {
        getAdminInfo()
          .then(res => res.json())
          .then(data => setAdmin(data.name))
    },[])

    return (
      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <div className={'notification-container'}>
              <NotificationList/>
          </div>
          <div className={'mainview-container'}>
              <h1 >
                  {"Hello " + admin + ","}
              </h1>
              <Chart/>
          </div>
      </div>
    )

}
