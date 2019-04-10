import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default class registerForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            usernameInputValue: "",
            passwordInputValue: "",
            formErrors: {
                username: "",
                password: ""
            }
        }
    }



    submitRegister = e => {
        e.preventDefault();
        if (formValid(this.state)) {
        fetch('http://localhost:8080/admins', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": this.state.usernameInputValue,
                "password": this.state.passwordInputValue
            })
        })}
        else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    updateUsernameInputValue(evt) {
        this.setState({
            usernameInputValue: evt.target.value
        });
    }
    updatePasswordInputValue(evt) {
        this.setState({
            passwordInputValue: evt.target.value
        });
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = {...this.state.formErrors};

        switch (name) {
            case "username":
                formErrors.username =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                this.updateUsernameInputValue(e);
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                this.updatePasswordInputValue(e);
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    };


    render() {
        const { formErrors } = this.state;
        return (
            <div className="main-box" id="sub-box">
                <Grid>
                    <Cell col={12}>
                        <form className="form" >
                            <h2>Register</h2>
                            <div className="inputBox">
                               <input type="text" id="registerUsername" required="required"
                                       placeholder="Username" name="username" value={this.state.usernameInputValue} onChange={this.handleChange}/>
                                {formErrors.username.length > 0 &&
                                    <span className="errorMessage">{formErrors.username}</span>
                                }
                            </div>
                            <div className="inputBox">
                               <input type="password" id="registerPassword" required="required"
                                       placeholder="password" name="password" value={this.state.passwordInputValue} onChange={this.handleChange}/>
                                {formErrors.password.length > 0 &&
                                    <span className="errorMessage">{formErrors.password}</span>
                                }
                            </div>
                            <input type="submit" name="submit" value="Register" onClick={this.submitRegister}/>
                        </form>
                    </Cell>
                </Grid>
            </div>
        )
    }
}