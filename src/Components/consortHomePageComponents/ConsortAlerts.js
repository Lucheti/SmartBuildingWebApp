import React, {Component} from 'react';
import Alert from "./Alert";


export default function ConsortAlerts(){

    const [alerts, setAlerts] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)


    function getAlerts(){
        if (!loaded) {
            fetch("http://localhost:8080/alerts/" + window.sessionStorage.id, {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + window.sessionStorage.token
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
