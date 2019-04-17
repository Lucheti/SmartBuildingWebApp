import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import landingPage from "./landingPage";
import derivatePage from "./derivatePage";
import page1 from "./page1"
import login from "./login"
import homePageAdmin from "./homePageAdmin";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.localStorage.token != undefined
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

const Main = () => (
    <Switch>
        <Route exact path="/" component={page1} />
        <Route path="/landingpage" component={landingPage} />
        <Route path="/derivate" component={derivatePage} />
        <PrivateRoute path="/home" component={homePageAdmin} />
        <Route path="/login" component={login} />
    </Switch>
)

export default Main;