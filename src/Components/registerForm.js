import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import RegisterForm from "../Pages/landingPage";

export default class registerForm extends Component {

    render() {

        return (
            <div className="main-box" id="register">
                <Grid>
                    <Cell col={12}>
                        <form className="form">
                            <h2>Register</h2>
                            <div className="inputBox">
                                <input type="text" id="registerUsername" required="required"
                                       placeholder="Username" />
                            </div>
                            <div className="inputBox">
                                <input type="password" id="registerPassword" required="required"
                                       placeholder="Password"/>
                            </div>
                            <input type="submit" name="submit" value="Register"/>
                        </form>
                    </Cell>
                </Grid>
            </div>
        )
    }
}