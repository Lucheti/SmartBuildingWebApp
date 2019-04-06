import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

export default class registerForm extends Component {

    submitRegister(event){

    }

    render() {

        return (
            <div className="main-box" id="sub-box">
                <Grid>
                    <Cell col={12}>
                        <form className="form" >
                            <h2>Register</h2>
                            <div className="inputBox">
                                <input type="text" id="registerUsername" required="required"
                                       placeholder="Username" />
                            </div>
                            <div className="inputBox">
                                <input type="password" id="registerPassword" required="required"
                                       placeholder="Password"/>
                            </div>
                            <input type="submit" name="submit" value="Register" onClick={this.submitRegister.bind(this)}/>
                        </form>
                    </Cell>
                </Grid>
            </div>
        )
    }
}