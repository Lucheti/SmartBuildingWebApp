import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import oldLandingPage from "./oldLandingPage";
import derivatePage from "./derivatePage";
import landingPage from "./landingPage"
import homePageAdmin from "./homePageAdmin";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.localStorage.token !== undefined
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/landingpage" component={oldLandingPage} />
        <Route path="/derivate" component={derivatePage} />
        <PrivateRoute path="/home" component={homePageAdmin} />
    </Switch>
)

export default Main;