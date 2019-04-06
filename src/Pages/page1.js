import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import LoginForm from "../Components/loginForm"
import RegisterForm from  "../Components/registerForm"
import Card from "../Components/card"

class Page1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: false,
            isRegisterOpen: false,
            isPageLoaded: false,
            loginCliked: false,
            registerClicked: false
        };
    }

    showLoginBox = () => {
        if (this.state.isPageLoaded) {
            this.setState({isLoginOpen: true, isRegisterOpen: false})
        }
    }

    showRegisterBox = () => {
        if (this.state.isPageLoaded) {
            this.setState({isLoginOpen: false, isRegisterOpen: true})
        }
    }

    loginCliked = () => {
        this.showLoginBox(this)
        this.setState({
            loginCliked: true,
            registerClicked: false
        })
    }
    registerCliked = () => {
        this.showRegisterBox(this)
        this.setState({
            loginCliked: false,
            registerClicked: true
        })
    }

    render() {
        return (
            <div>
                <Grid>
                    <Cell col={5} style={{padding: "16px"}}>
                        <div className="main-box" id="noPadding">
                            <Grid id="noPadding">
                                {!this.state.loginCliked && <Cell col={6} style={{margin: 0, width: "50%"}}>
                                    <h4 className="button" onClick={this.loginCliked}>Login</h4>
                                </Cell>}
                                {this.state.loginCliked && <Cell col={6} style={{margin: 0, width: "50%" ,  background: "linear-gradient(to top, var(--left-red-darker), var(--right-red-darker))"
                                }}>
                                    <h4 className="button" onClick={this.showLoginBox}>Login</h4>
                                </Cell>}
                                {!this.state.registerClicked && <Cell col={6} style={{margin: 0, width: "50%"}}>
                                    <h4 className="button" onClick={this.registerCliked}>Register</h4>
                                </Cell>}
                                {this.state.registerClicked && <Cell col={6} style={{margin: 0, width: "50%" ,background: "linear-gradient(to top, var(--left-red-darker), var(--right-red-darker))"}}>
                                    <h4 className="button" onClick={this.registerCliked}>Register</h4>
                                </Cell>}
                            </Grid>
                        </div>

                        {this.state.isLoginOpen && <LoginForm/>}
                        {this.state.isRegisterOpen && <RegisterForm/>}
                        {this.state.isPageLoaded = true}
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