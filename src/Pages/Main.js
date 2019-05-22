import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import landingPage from "./landingPage"
import homePageAdmin from "./homePageAdmin";
import homePageConsort from "./homePageConsort";
import notFound from "./notFound";

const PrivateRoute = ({ component: Component,redirectCondition: Condition, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.sessionStorage.token !== undefined && window.sessionStorage.role === Condition
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <PrivateRoute path="/adminHome" component={homePageAdmin} redirectCondition="admin"/>
        <PrivateRoute path="/consortHome" component={homePageConsort} redirectCondition="consort"/>
        <Route path="/notfound" component={notFound}/>
    </Switch>
)

export default Main;