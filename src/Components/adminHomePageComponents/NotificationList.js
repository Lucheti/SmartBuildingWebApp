import React, {Component} from 'react';
import {Cell} from "react-mdl";

export default class NotificationList extends Component {

    getAdminNotifications = () => {
        fetch("http://localhost:8080/admins/" + window.sessionStorage.id +"/notifications",{
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => res.json())
            .then(data => {

                const list = document.getElementById("notification-list");
                for (const element of data){
                    //create containers
                    const notification = document.createElement("LI");
                    const notificationInfo = document.createElement("h4");
                    const notificationDescription = document.createElement("p");
                    //get data
                    notificationInfo.innerHTML = element.apartment.consorce.name + "    " + element.apartment.apartmentCode;
                    notificationDescription.innerHTML = element.description;
                    //append childs
                    notification.appendChild(notificationInfo);
                    notification.appendChild(notificationDescription);

                    //insert items into list
                    list.appendChild(notification);

                }
            }).catch()
    }

    componentWillMount() {
        this.getAdminNotifications()
    }

    render() {

        return (
            <div className="notifications-container">
                <h2>NOTIFICATIONS</h2>
                <ul id="notification-list" className="notification-list" />

            </div>

        )
    }
}

function Notification({title: title, text: text}) {
    return(
        <li>
           <h4>{title}</h4>
           <p>{text}</p>
        </li>
    )
}