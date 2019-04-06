import React, { Component } from "react";
import {FormGroup, FormControl, ControlLabel} from "react-mdl";
import RegisterForm from "../Components/registerForm"
export default class Login extends Component {


    render() {
        return (
            <div>
                <RegisterForm/>
            </div>
        );
    }
}