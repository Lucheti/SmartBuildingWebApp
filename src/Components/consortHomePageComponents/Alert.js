import React from 'react';


export default function Alert({alert}) {

    return (
        <li className="alert" style={{justifyContent: 'space-between', padding: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between', width: '100%'}}>
            <div className={'alertAux'}><span>Category: </span> <p>{alert.category.name}</p></div>
            <div className={'alertAux'}><span>Consorce: </span><p>{alert.consorce.name}</p></div>
            <div><span>Desciption: </span><p style={{textAlign: '-webkit-center'}}>{alert.description}</p></div>
          </div>
        </li>
    )
}