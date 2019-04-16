import React from 'react';
import {Switch,Route} from "react-router-dom";
// import homePageAdmin from "./homePageAdmin";
import derivatePage from "./derivatePage";
import page1 from "./page1"
import login from "./login"
import homePageAdmin from "./homePageAdmin";

const Main = () => (
    <Switch>
        <Route exact path="/" component={page1} />
        <Route path="/derivate" component={derivatePage} />
        <Route path="/home" component={homePageAdmin} />
        <Route path="/login" component={login} />
    </Switch>
)

export default Main;