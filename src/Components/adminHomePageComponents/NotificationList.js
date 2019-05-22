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
                console.log(data)
                const list = document.getElementById("notification-list");
                for (const element of data){
                    //create containers
                    const notification = document.createElement("LI");
                    const consorce = document.createElement("h4");
                    const apartment = document.createElement("h4")
                    const category = document.createElement("p");
                    const description = document.createElement("p");
                    //get data
                    consorce.innerHTML = element.apartment.consorce.name;
                    apartment.innerHTML = element.apartment.apartmentCode;
                    category.innerHTML = element.category.name;
                    description.innerHTML = element.description;
                    //extra things for style
                    consorce.id = "consorce";
                    apartment.id = "apartmentCode";
                    category.id = "category";
                    description.id = "description";
                    //append childs
                    notification.appendChild(consorce);
                    notification.appendChild(apartment);
                    notification.appendChild(category);
                    notification.appendChild(description);

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