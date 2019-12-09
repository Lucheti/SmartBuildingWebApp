import React, {Component} from 'react';
import {Notification} from "./Notification";
import ReportProblem from "../../consortHomePageComponents/ReportProblem";
import { sortNotifications } from '../../utils/NotificationSorter'
import { RenderContext } from '../../../Pages/homePageAdmin'
import { updateNotifications } from '../reducers/RenderReducer'
let base64 = require('base-64')

export const NotificationListContext = React.createContext()


export const NotificationList = () => {

    const {state, dispatch} = React.useContext(RenderContext)
    const {notifications} = state
    const updateNotificationList = () => {
        fetch('http://localhost:8080/notifications/' + window.sessionStorage.id + '/' + window.sessionStorage.role)
          .then(res => res.json())
          .then(data => { dispatch(updateNotifications(data)) })
    }

    React.useEffect(() => {
        updateNotificationList()
    },[])

    const sort = (type) => dispatch(updateNotifications(sortNotifications(type, notifications)))

    return (
      <NotificationListContext.Provider value={ updateNotificationList }>
        <div className="notifications-container">
            <h2>NOTIFICATIONS</h2>
            <div className={"sorter"}>
                <input list={"options"} onChange={ evt => sort(evt.target.value)} placeholder={"Sort Notifications"}/>
                <datalist id="options">
                    <option value={"Default"}/>
                    <option value={"Category"}/>
                    <option value={"Consorce"}/>
                    <option value={"Pending"}/>
                    <option value={"Seen"}/>
                    <option value={"Working"}/>
                    <option value={"Done"}/>
                    <option value={"Importance"}/>
                </datalist>
            </div>
            <ul id="notification-list" className="notification-list" >
                {notifications.map((nofitication, i) =>
                    <>
                        <Notification key={i} notification={nofitication}/>
                        {/*{i !== notifications.length && <hr/>}*/}
                    </>
                    )
                }

            </ul>

            {window.sessionStorage.role === "consort" && <ReportProblem list={() => {}}/>}
        </div>
      </NotificationListContext.Provider>

          )
}

