import React, {Component} from 'react';
import {Button} from "react-mdl";

export default class LogoutButton extends Component {

    logout = () => {
        window.sessionStorage.clear()
        window.open("/","_self")
    }

    render() {

        return (
            <button onClick={this.logout}>LOGOUT</button>
        )
    }
}