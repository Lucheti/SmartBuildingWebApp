import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import AdminLoginForm from "./adminLoginForm"
import ConsortLoginForm from "./consortLoginForm"

export default class loginForm extends Component {

    render() {

        return(
            <div className="main-box" id="loginTest">
                <Grid>
                    <Cell col={6}>
                        <AdminLoginForm/>
                    </Cell>
                    <Cell col={6}>
                        <ConsortLoginForm/>
                    </Cell>
                </Grid>
            </div>
        )}
}