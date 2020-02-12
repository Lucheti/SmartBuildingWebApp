import React, {Component} from 'react';
import {Notification} from "./Notification";
import ReportProblem from "../../consortHomePageComponents/ReportProblem";
import { sortNotifications } from '../../utils/NotificationSorter'
import { updateNotifications } from '../reducers/RenderReducer'
import { RenderContext } from '../../../App'
let base64 = require('base-64')

export const NotificationListContext = React.createContext()


export const NotificationList = () => {

    const {state, dispatch} = React.useContext(RenderContext)
    const {notifications} = state
    const [sortBy, setSortBy] = React.useState('Default')
    const updateNotificationList = () => {
        return fetch('http://localhost:8080/notifications/' + window.sessionStorage.id + '/' + window.sessionStorage.role)
          .then(res => res.json())
          .then(data => { dispatch(updateNotifications(data)) })
    }

    React.useEffect(() => {
        let item = window.localStorage.getItem('sortBy')
        if (item)
            setSortBy(item)
    })

    const setSortByAux = value => {
        window.localStorage.setItem('sortBy', value)
        setSortBy(value)
    }

    React.useEffect(() => {
        updateNotificationList()
    },[])

    return (
      <NotificationListContext.Provider value={ updateNotificationList }>
        <div className="notifications-container">
            <div>
            <h2>NOTIFICATIONS</h2>
            <div className={"sorter"}>
                <input value={sortBy} list={"options"} onChange={ evt => setSortByAux(evt.target.value)} placeholder={"Sort Notifications"}/>
                <datalist id="options">
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
                {sortNotifications(sortBy,notifications).map((nofitication, i) =>
                    <>
                        <Notification key={i} notification={nofitication}/>
                    </>
                    )
                }

            </ul>
            </div>

        </div>
      </NotificationListContext.Provider>

          )
}

