import React, {Component} from 'react';
import {Spring, Transition} from "react-spring/renderprops";
import {Button, Cell, Grid} from "react-mdl";
import {logout} from "../Components/generalFunctions/logout";
import NotificationList from "../Components/adminHomePageComponents/Notifications/NotificationList";
import ConsortAlerts from "../Components/consortHomePageComponents/ConsortAlerts";


function HomePageConsort(){

    const [getStarted, setGetStarted] = React.useState(false);

    function toggle (e){
        e.preventDefault();
        setGetStarted(!getStarted);
    }

            return(
                <div className="main-container">
                    <Grid className="no-padding">
                        <Cell col={3}>
                            <NotificationList/>
                            <ConsortAlerts/>
                        </Cell>
                        <Cell col={9}>
                            <Button className="logout" onClick={logout}>LOGOUT</Button>
                        </Cell>
                    </Grid>
                </div>
                )

}

export default HomePageConsort;