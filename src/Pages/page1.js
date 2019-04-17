import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import LoginForm from "../Components/loginForm"
import RegisterForm from  "../Components/registerForm"
import Card from "../Components/card"
import Popup from "../Components/PopUp";

class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: false,
            isRegisterOpen: false,
            viewDidLoad: false,
            loginClicked: false,
            registerClicked: false,
            showPopup: false
        };
    }

    togglePopup = () => {
        console.log("popup");
        this.setState({showPopup:!this.state.showPopup})
    }

    showLoginBox = e => {
        // e.preventDefault()
        this.setState({isLoginOpen: true, isRegisterOpen: false})

    }

    showRegisterBox = e => {
        // e.preventDefault()
        this.setState({isLoginOpen: false, isRegisterOpen: true})
    }

    loginCliked = e => {
        e.preventDefault()

        this.showLoginBox(this)
        this.setState({
            loginClicked: true,
            registerClicked: false
        })
    }
    registerCliked = e => {
        e.preventDefault()
        this.showRegisterBox(this)
        this.setState({
            loginClicked: false,
            registerClicked: true
        })
    }

    render() {
        return (
            <div>
                {this.state.showPopup && <Popup text='Register Completed' togglePopup={this.togglePopup} />}
                <Grid>
                    <Cell col={5} style={{paddingTop: "16px", height: "fit-content"}}>
                        <div className="main-box" id="noPadding" style={{background: "none"}}>
                            <Grid id="noPadding" >

                                {/*~~~~~~~~~~~~~~LOGIN BUTTON~~~~~~~~~~~~~~~~~~~*/}
                                <Cell col={6} className={"cell" + (this.state.loginClicked? "Clicked": "")}>
                                    <h4 className="button" onClick={this.loginCliked}>Login</h4>
                                </Cell>

                                {/*~~~~~~~~~~~~~~REGISTER BUTTON~~~~~~~~~~~~~~~~~~~*/}
                                <Cell col={6} className={"cell" + (this.state.registerClicked? "Clicked": "")}>
                                    <h4 className="button" onClick={this.registerCliked}>Register</h4>
                                </Cell>
                            </Grid>
                        </div>

                        {this.state.isLoginOpen && <LoginForm/>}
                        {this.state.isRegisterOpen && <RegisterForm  handlePopup = {this.togglePopup}  />}
                        {this.state.viewDidLoad = true}
                    </Cell>
                    <Cell col={7}>
                        <Grid>
                            <Cell col={6}>
                                <Card/>
                            </Cell>
                            <Cell col={6}>
                                <Card/>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>

        );
    }
}

export default Page1;