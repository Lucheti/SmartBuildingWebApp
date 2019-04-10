import React, {Component} from 'react';
import {Card, CardTitle, Cell, Grid} from "react-mdl";
import LoginForms from "../Components/loginForm"
import RegisterForm from "../Components/registerForm"
import MyCard from "../Components/card"



class landingPage extends Component {
    constructor(props){
        super(props);
        this.state={
            viewDidLoad: false,
            testClicked: false
        }
    }


    render() {
            return (
                <div>
                    <div>
                        <Grid>
                            <Cell col={8}>
                                <LoginForms/>
                            </Cell>
                            <Cell col={4}>
                                <RegisterForm/>
                            </Cell>
                        </Grid>
                        <div>
                            <Grid>
                                <Cell col={3}>
                                    <MyCard/>
                                </Cell>
                                <Cell col={3}>
                                    <MyCard/>
                                </Cell>
                                <Cell col={3}>
                                    <MyCard/>
                                </Cell>
                                <Cell col={3}>
                                    <MyCard/>
                                </Cell>
                            </Grid>
                        </div>
                    </div>
                    <div className="test">
                        <div className="main-box" id="info-div">
                            <h1> SmartBuilding for your administration</h1>
                        </div>
                        <div className="black-text-background">
                        </div>
                    </div>
                </div>

            );
        }

    // registerUser (username , password){
    //     console.log(username)
    //     console.log(password)
    //     fetch('http://localhost:8080/admins', {
    //         method: 'POST',
    //         headers: {
    //             // 'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "username": username,
    //             "password": password
    //         })
    //     })
    // }

    // test(){
    //     if(this.state.rendered){}
    //     console.log(document.getElementById("registerUsername"))
    //     console.log(document.getElementById("registerPassword"))
    // }
    }


export default landingPage;