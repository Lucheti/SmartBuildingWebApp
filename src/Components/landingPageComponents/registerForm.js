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

export default class RegisterForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            formErrors: {
                username: "",
                password: ""
            }
        }
    }



    submitRegister = e => {
        e.preventDefault();
        if (formValid(this.state)) {
        fetch('http://192.168.0.185:8080/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.email,
                "name": this.state.name,
                "role": "admin",
                "password": this.state.password,
            })
        })
            .then(res => {
                if (res.ok) {
                    this.kill()
                }
            })
        }
    }

    kill = () => {
        this.props.setRegister();
    }

    updateValue(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = {...this.state.formErrors};

        switch (name) {
            case "name":
                formErrors.username =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                this.updateValue(e);
                break;
            case "email":
                formErrors.username =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                this.updateValue(e);
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                this.updateValue(e);
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    };


    render() {
        const { formErrors,name,email,password } = this.state;
        return (
            <div className="login">
                <h2>Register</h2>
                <form>
                    <div className="input-group">
                        <input type="text" id="registerUsername" required="required"
                               name="name" value={name} onChange={this.handleChange}/>
                        <span>Name</span>
                        {formErrors.username.length > 0 &&
                        <p>{formErrors.username}</p>
                        }
                    </div>
                    <div className="input-group">
                        <input type="text" id="registerUsername" required="required"
                                name="email" value={email} onChange={this.handleChange}/>
                               <span>Email</span>
                               {formErrors.username.length > 0 &&
                               <p>{formErrors.username}</p>
                               }
                    </div>
                    <div className="input-group">
                        <input type="password" id="registerPassword" required="required"
                                name="password" value={password} onChange={this.handleChange}/>
                               <span>Password</span>
                               {formErrors.password.length > 0 &&
                               <p>{formErrors.password}</p>
                               }
                    </div>
                    <div className="input-group">
                        <input type="submit" name="submit" value="Register" onClick={this.submitRegister}/>
                    </div>
                </form>
                <a href="#">Already have an account? <span onClick={this.kill}>Click Here</span></a>
            </div>
        )
    }
}
