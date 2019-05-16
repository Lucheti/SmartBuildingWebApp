import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import landingPage from "./landingPage"
import homePageAdmin from "./homePageAdmin";
import derivatePage from "./homePageConsort";

const PrivateRoute = ({ component: Component,redirectCondition: Condition, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.sessionStorage.token !== undefined && window.sessionStorage.role === Condition
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <PrivateRoute path="/consortHome" component={derivatePage} redirectCondition="consort"/>
        <PrivateRoute path="/adminHome" component={homePageAdmin} redirectCondition="admin"/>
    </Switch>
)

export default Main;