import React, {Component} from 'react';
import {updateNotificationList} from "../functions/updateNotificationList";

export default class UpdateNotificationStateButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notification: props.notification,
            nextState: ""
        }
    }

    getNextState = () => {
        fetch("http://localhost:8080/state/" + this.state.notification.state.id,{
            method: 'GET',
            headers: {
            }
        }).then(res => res.json())
            .then(data => {
                this.setState({nextState: data.status})})
          .catch(err => console.log(err))
    }

    updateState = e => {
        e.preventDefault();
        fetch("http://localhost:8080/notifications", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...this.state.notification
            })
        }).then(res => {
            if (res.ok){
                updateNotificationList(this.props.refresh)
            }
        } )
    };

    deleteNotification = () => {
        fetch('http://localhost:8080/notifications/' + this.state.notification.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...this.state.notification
            })
    }).then(res => {
            if (res.ok){
                updateNotificationList(this.props.refresh)
            }
        } )
    }

    componentWillMount() {
        this.getNextState()
    }

    render() {

        const {nextState} = this.state;
        const {status} = this.state.notification.state;

        return (
            <>
            {status !== "solved" ?
                <input value={"mark as " + nextState} type="submit" onClick={this.updateState}/>
                :
                <input value={"delete"} type={"submit"} onClick={this.deleteNotification}/>
            }
            </>
            )
    }
}