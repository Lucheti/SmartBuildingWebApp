import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import AdminLoginForm from "./adminLoginForm"
import ConsortLoginForm from "./consortLoginForm"

export default class loginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAdminLogin: false,
            isConsorLogin: false,
            adminClicked:false,
            consorClicked: false,
            usernameInputValue: "",
            passwordInputValue: ""
        }
    }

    showAdminLogin = () => {
        this.setState({
            isAdminLogin: true,
            isConsorLogin: false
        })
    }

    showConsorLogin = () => {
        this.setState({
            isAdminLogin: false,
            isConsorLogin: true
        })
    }

    adminCliked = () => {
        this.showAdminLogin(this)
        this.setState({
            adminClicked: true,
            consorClicked: false
        })
    }
    consorCliked = () => {
        this.showConsorLogin(this)
        this.setState({
            adminClicked: false,
            consorClicked: true
        })
    }

    handleLogin = e =>{
        console.log("attempting login")
        e.preventDefault();
            fetch('http://localhost:8080/oauth/token?grant_type=password&username='+ this.state.usernameInputValue +'&password=' + this.state.passwordInputValue, {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic '+btoa('my-trusted-client:secret'),

                },
                body: JSON.stringify({
                    "username": this.state.usernameInputValue,
                    "password": this.state.passwordInputValue
                })
            })
                .then((res) => {
                    if(res.ok) {
                        console.log("res")
                        res.json().then(json => {
                        window.localStorage.setItem('token', json.access_token);
                        console.log(json.access_token);
                        window.open("/home", "_self")
                    })}
                    else console.log(res)
                })



    }

    updateUsernameInputValue = (evt) => {
        this.setState({
            usernameInputValue: evt.target.value
        });
    }
    updatePasswordInputValue = (evt) =>{
        this.setState({
            passwordInputValue: evt.target.value
        });
    }

    updateField = (evt) =>{
        evt.target.name == "adminLoginUsername" ? this.updateUsernameInputValue(evt) : this.updatePasswordInputValue(evt)
    }

    render() {
         return(
        <div className="main-box" id="sub-box" style={{background: "none"}}>
            <Grid id="noPadding">
                {/*~~~~~~~~~~~~~~ADMIN BUTTON~~~~~~~~~~~~~~~~~~~*/}
                <Cell col={6} className={"cell" + (this.state.consorClicked? "Clicked": "")}>
                    <h4 className="alternativeButton" onClick={this.adminCliked}>Admin</h4>
                </Cell>

                {/*~~~~~~~~~~~~~~CONSOR BUTTON~~~~~~~~~~~~~~~~~~~*/}
                <Cell col={6} className={"cell" + (this.state.adminClicked? "Clicked": "")}>
                    <h4 className="alternativeButton" onClick={this.consorCliked}>Consort</h4>
                </Cell>

            </Grid>
            {(this.state.isAdminLogin || this.state.isConsorLogin) &&
            <Grid style={{background: "linear-gradient(to top, var(--left-red), var(--right-red))"}}>
                <Cell col={12}>
                    {this.state.isAdminLogin && <AdminLoginForm handleLogin={this.handleLogin} userValue={this.state.usernameInputValue} passValue={this.state.passwordInputValue} onUpdate={this.updateField}/>}
                    {this.state.isConsorLogin && <ConsortLoginForm handleLogin={this.handleLogin}/>}
                </Cell>
            </Grid>}
        </div>
        )}
}