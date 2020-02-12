import React, {Component} from 'react';
import {Spring, Transition} from "react-spring/renderprops";
import {Button, Cell, Grid} from "react-mdl";
import {logout} from "../Components/generalFunctions/logout";
import { NotificationList } from '../Components/adminHomePageComponents/Notifications/NotificationList'
import ConsortAlerts from "../Components/consortHomePageComponents/ConsortAlerts";
import ReportProblem from '../Components/consortHomePageComponents/ReportProblem'

export const UPDATE_NOTIFICATIONS = 'update notifications'

function HomePageConsort(){

  return(
      <div className="main-container" >
          <Header/>
          <Grid className="no-padding" >
            <Cell col={3} >
                <NotificationList/>
            </Cell>
            <Cell col={5} >
              <ReportProblem list={() => {}}/>
            </Cell>
            <Cell col={4} >
              <ConsortAlerts/>
            </Cell>
          </Grid>
      </div>
      )

}

const Header = () => {
    return (
        <div className='header'>
            <h4>Smart Building</h4>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default HomePageConsort;
