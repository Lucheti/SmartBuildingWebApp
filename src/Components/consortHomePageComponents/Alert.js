import React from 'react';


export default function Alert({alert, update}) {

    return (
        <li className="alert">
            <div><i className="fas fa-exclamation-triangle fa-2x"/></div>
            <div><span>Category: </span> <p>{alert.category.name}</p></div>
            <div><span>Desciption: </span><p>{alert.description}</p></div>
            <div><span>Consorce: </span><p>{alert.consorce.name}</p></div>
        </li>
    )
}