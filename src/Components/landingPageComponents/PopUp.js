import React, { Component } from 'react';



export default function Popup(props){


    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>{props.text}</h1>
                <button onClick={props.togglePopup}>Close</button>
            </div>
        </div>
    );

}
