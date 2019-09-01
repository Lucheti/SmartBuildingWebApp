import React from 'react';


export default function Alert({alert, update}) {

    function dismissAlert(){

        fetch("http://localhost:8080/alerts",{
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...alert
            })
        }).then(res => {
            if (res.ok){update()}})
    }

    return (
        <li className="alert">
            <div><i className="fas fa-exclamation-triangle fa-2x"/></div>
            <div><span>Category: </span> <p>{alert.category.name}</p></div>
            <div><span>Desciption: </span><p>{alert.description}</p></div>
            <button className="important-icon" onClick={dismissAlert}><i className="fa fa-trash fa-2x"/></button>
        </li>
    )
}