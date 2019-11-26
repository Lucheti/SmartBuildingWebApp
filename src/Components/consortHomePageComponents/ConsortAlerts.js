import React, {Component} from 'react';
import Alert from "./Alert";
import { BASE_URL } from '../../Pages/Main'


export default function ConsortAlerts(){

    const [alerts, setAlerts] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)


    function getAlerts(){
        if (!loaded) {
            fetch(BASE_URL + "/alerts/" + window.sessionStorage.id, {
                method: 'GET',
                headers: {
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.length > 0) {
                        setAlerts(data)
                        setLoaded(true)
                    } else {
                        setAlerts([])
                        setLoaded(true)
                    }
                })
        }

    }


        return (
            <div className="consort-alerts">
                <h4>Alerts</h4>
                <ul style={{padding: 0}}>
                    {getAlerts()}
                    {loaded && alerts.map((alert, i) => (<Alert alert={alert}/>))}
                </ul>
            </div>
        );

}
