import React from 'react';
import {Switch,Route} from "react-router-dom";
import landingPage from "./landingPage";
import derivatePage from "./derivatePage";
import page1 from "./page1"
import login from "./login"

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/derivate" component={derivatePage} />
        <Route path="/page1" component={page1} />
        <Route path="/login" component={login} />
    </Switch>
)

export default Main;