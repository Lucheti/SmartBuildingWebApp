import React, {Component} from 'react';
import {Button, Card, CardTitle, Cell, Grid} from "react-mdl";
import ActionPanel from "../Components/ActionPanel";



class homePageAdmin extends Component {
    constructor(props){
        super(props)
    }

    getAdminNotifications = () => {
        fetch("http://localhost:8080/admins/" + window.sessionStorage.id +"/notifications",{
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => res.json())
            .then(data => {

                const list = document.getElementById("notifications")
                for (const element of data){
                    //create containers
                    const notification = document.createElement("LI")
                    const notificationInfo = document.createElement("h4")
                    const notificationDescription = document.createElement("p")
                    //get data
                    notificationInfo.innerHTML = element.apartment.consorce.name + "    " + element.apartment.apartmentCode
                    notificationDescription.innerHTML = element.description
                    //append childs
                    notification.appendChild(notificationInfo)
                    notification.appendChild(notificationDescription)
                    //insert items into list
                    list.appendChild(notification)

                }
            }).catch()
    }
    componentWillMount() {
        this.getAdminNotifications()
    }





    render() {
        return (

            <div>
                <Grid>
                    <Cell col={4}>
                        <ul id="notifications" className="notification-list" />
                    </Cell>
                    <Cell col={8}>
                        <ActionPanel/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default homePageAdmin;