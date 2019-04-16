import React, {Component} from 'react';
import {Card, CardTitle, Cell, Grid} from "react-mdl";
import MyCard from "../Components/card"
import Popup from "../PopUp";



function homePageAdmin(){
            return (
                <div>
                    <div>
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



export default homePageAdmin;