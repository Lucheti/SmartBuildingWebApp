import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import landingPage from "./landingPage"
import homePageAdmin from "./homePageAdmin";
import homePageConsort from "./homePageConsort";

export const BASE_URL = 'http://localhost:8080'

const PrivateRoute = ({ adminPage: AdminPage,consortPage: ConsortPage, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.sessionStorage.token !== undefined ?
            <div>
                    {window.sessionStorage.role === "admin" && <AdminPage {...props}/>}
                    {window.sessionStorage.role === "consort" && <ConsortPage {...props}/>}
            </div>
            : <Redirect to='/' />
    )} />
);

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <PrivateRoute path="/home" adminPage={homePageAdmin} consortPage={homePageConsort} redirectCondition="admin"/>
    </Switch>
)

export default Main;
