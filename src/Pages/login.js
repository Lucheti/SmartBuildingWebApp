import React, { Component } from "react";
import {Button, FormGroup, FormControl, ControlLabel, Grid, Cell} from "react-mdl";
import Loginform from "../Components/loginForm"
import LoginFormTest from "../Components/loginFormTest"
export default class Login extends Component {

    render() {
        return (

                <div>
                    <Grid>
                        <Cell col={12}>
                            <LoginFormTest/>
                        </Cell>
                    </Grid>
                </div>
        );
    }
}