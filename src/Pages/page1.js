import React, {Component} from 'react';
import {Card, CardTitle, Cell, Grid} from "react-mdl";
import AdminConsorText from "../Components/adminConsorText"

class Page1 extends Component {
    render() {
        return (
            <div>
                <div>
                    <Grid>
                        <Cell col={8}>

                            <div className="main-box" id="login">
                                <Grid>
                                    <Cell col={12}>
                                        <div className="form">
                                            <AdminConsorText/>
                                        </div>
                                    </Cell>
                                </Grid>
                            </div>

                        </Cell>
                        <Cell col={4}>
                            <div className="main-box" id="register">
                                <Grid>
                                    <Cell col={12}>
                                        <form className="form">

                                            <h2>Register</h2>

                                            <div className="inputBox">
                                                <input type="text" name="adminUsername" required="required"
                                                       placeholder="Username"/>
                                            </div>

                                            <div className="inputBox">
                                                <input type="text" name="adminPassword" required="required"
                                                       placeholder="Password"/>
                                            </div>

                                            <input type="submit" name="submit" value="Log In"/>
                                        </form>
                                    </Cell>
                                </Grid>
                            </div>
                        </Cell>
                    </Grid>
                    <div>

                        <Grid>
                            <Cell col={3} className="">
                                <Card shadow={0} className="main-cards">
                                    <CardTitle expand className="main-card-title">
                                        <h4 style={{marginTop: '0'}}>
                                            Featured event:<br/>
                                            May 24, 2016<br/>
                                            7-11pm
                                        </h4>
                                    </CardTitle>
                                </Card>
                            </Cell>
                            <Cell col={3}>
                                <Card shadow={0} className="main-cards">
                                    <CardTitle expand className="main-card-title">
                                        <h4 style={{marginTop: '0'}}>
                                            Featured event:<br/>
                                            May 24, 2016<br/>
                                            7-11pm
                                        </h4>
                                    </CardTitle>
                                </Card>
                            </Cell>
                            <Cell col={3}>
                                <Card shadow={0} className="main-cards">
                                    <CardTitle expand className="main-card-title">
                                        <h4 style={{marginTop: '0'}}>
                                            Featured event:<br/>
                                            May 24, 2016<br/>
                                            7-11pm
                                        </h4>
                                    </CardTitle>
                                </Card>
                            </Cell>
                            <Cell col={3}>
                                <Card shadow={0} className="main-cards">
                                    <CardTitle expand className="main-card-title">
                                        <h4 style={{marginTop: '0'}}>
                                            Featured event:<br/>
                                            May 24, 2016<br/>
                                            7-11pm
                                        </h4>
                                    </CardTitle>
                                </Card>
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

export default Page1;