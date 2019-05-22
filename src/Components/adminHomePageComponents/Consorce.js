import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

export default class Consorce extends Component {

    constructor(props){
        super(props);
        this.state = {
            consorceName: props.consorceName,
            consorceId: props.consorceId,

        }
    }

    render() {

        var {consorceName,consorceId} = this.state

        return (
            <div>
                <h4>{consorceName}</h4>
                <ul id={"consorce" + consorceId} name={consorceName}>

                </ul>

            </div>
        )
    }
}