import React, {Component} from 'react';
import {Button, Card, CardTitle, Cell, Grid} from "react-mdl";
import ActionPanel from "../Components/adminHomePageComponents/ActionPanel";
import NotificationList from "../Components/adminHomePageComponents/NotificationList";
import LogoutButton from "../Components/generalComponents/LogoutButton";



class homePageAdmin extends Component {

    render() {
        return (

            <div className="main-container">
                <Grid className="no-padding">
                    <Cell col={3}>
                        <NotificationList/>
                    </Cell>
                    <Cell col={9}>
                        <ActionPanel/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default homePageAdmin;