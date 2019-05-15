import React, {Component} from 'react';
import {Card, CardTitle, Cell, Grid} from "react-mdl";
import LoginForms from "../Components/landingPageComponents/loginForm"
import RegisterForm from "../Components/landingPageComponents/registerForm"
import MyCard from "../Components/card"
import Popup from "../Components/landingPageComponents/PopUp";



class oldLandingPage extends Component {
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

    }


export default oldLandingPage;