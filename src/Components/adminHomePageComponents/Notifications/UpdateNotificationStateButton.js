import React, {Component} from 'react';
import { NotificationListContext } from './NotificationList'

export const UpdateNotificationStateButton = ({notification}) => {

    const updateNotificationList = React.useContext(NotificationListContext)
    const [nextState, setNextState] = React.useState("")
    const {status} = notification.state;


    React.useEffect(() => {
        getNextState()
    },[])

    const getNextState = () => {
        fetch("http://localhost:8080/state/" + notification.state.id,{
            method: 'GET',
            headers: {
            }
        }).then(res => res.json())
            .then(data => setNextState(data.status))
          .catch(err => console.log(err))
    }

    const updateState = e => {
        e.preventDefault();
        fetch("http://localhost:8080/notifications", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...notification
            })
        }).then(res => {
            if (res.ok){
                updateNotificationList()
            }
        } )
    };

    const deleteNotification = () => {
        fetch('http://localhost:8080/notifications/' + notification.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...notification
            })
        }).then(res => {
            if (res.ok){
                updateNotificationList()
            }
        } )
    }


        return (
            <>
            {status !== "solved" ?
              <button onClick={ updateState }>{"mark as " + nextState}</button>
                :
              <button onClick={ deleteNotification }>delete</button>
            }
            </>
            )

}