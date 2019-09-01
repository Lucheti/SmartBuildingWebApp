import React, {Component} from 'react';
import Notification from "./Notification";
import {updateNotificationList} from "../functions/updateNotificationList";
import ReportProblem from "../../consortHomePageComponents/ReportProblem";


export default class NotificationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
            updated: true
        }
    }

    componentWillMount() {
        updateNotificationList(this);
    }

    sortNotifications = (evt) =>{
        switch (evt.target.value.toLowerCase()) {
            case "category": {
                this.state.notifications.sort((a, b) => {
                    if (a.category.name > b.category.name) {
                        return 1;
                    }
                    if (a.category.name < b.category.name) {
                        return -1;
                    }
                    return 0;});
                    this.update();
                break;
            }
            case "consorce": {
                this.state.notifications.sort((a, b) => {
                    if (a.apartment.consorce.name > b.apartment.consorce.name) {
                        return 1;
                    }
                    if (a.apartment.consorce.name < b.apartment.consorce.name) {
                        return -1;
                    }
                    return 0;});
                this.update();
                break;
            }
            case "pending": {
                this.sortNotificationsByState(1);
                this.update();
                break;
            }
            case "seen": {
                this.sortNotificationsByState(2);
                this.update();
                break;
            }
            case "working": {
                this.sortNotificationsByState(3);
                this.update();
                break;
            }
            case "done": {
                this.sortNotificationsByState(4);
                this.update();
                break;
            }
            case "importance": {
                this.state.notifications.sort((a, b) => {
                    if (a.category.important && !b.category.important) {
                        return -1;
                    }
                    if (b.category.important && !a.category.important) {
                        return 1;
                    }
                    return 0;});
                this.update();
                break;
            }
            case "default": {
                updateNotificationList(this);
                break;
            }
        }
    };

    sortNotificationsByState = (stateId) =>{
        this.state.notifications.sort((a, b) => {
            if (a.state.id === stateId) {
                return -1;
            }
            if (b.state.id === stateId){
                return 1;
            }
            return 0;});
    }

    update = () => {
        this.toggleUpdated();
        setTimeout( () => {this.toggleUpdated()},0);
    }

    toggleUpdated = () => {this.setState(p => {return {updated: !p.updated}})};


    render() {
        const {notifications, updated} = this.state;
        return (
            <div className="notifications-container">
                <h2>NOTIFICATIONS</h2>
                <div className={"sorter"}>
                    <input list={"options"} onChange={this.sortNotifications} placeholder={"Sort Notifications"}/>
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
                    {updated && notifications && notifications.map((nofitication, i) =>
                        <>
                            <Notification key={i} notification={nofitication} refresh={this}/>
                            {i !== notifications.length && <hr/>}
                        </>
                        )
                    }

                </ul>

                {window.sessionStorage.role === "consort" && <ReportProblem list={this}/>}
            </div>
        )
    }
}
