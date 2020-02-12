import React, {Component} from 'react';
import { NotificationListContext } from './NotificationList'
import { RenderContext } from '../../../App'
import { changeModalComponentTo } from '../reducers/RenderReducer'
import DeleteConfirmModal from '../ManageConsorces/DeleteConfirmModal'

export const UpdateNotificationStateButton = ({notification}) => {

    const {dispatch} = React.useContext(RenderContext)
    const updateNotificationList = React.useContext(NotificationListContext)
    const [nextState, setNextState] = React.useState("")
    const {status} = notification.state;


    React.useEffect(() => {
        getNextState()
    },[notification])

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
                getNextState().then( () => updateNotificationList())
            }
        } )
    }


        return (
            <>
            {status !== "solved" ?
              <button onClick={ updateState }>{"Mark as " + nextState}</button>
                :
              <button onClick={ () => dispatch(changeModalComponentTo( () => DeleteConfirmModal({callback: () => deleteNotification()}))) }>Delete</button>
            }
            </>
            )

}