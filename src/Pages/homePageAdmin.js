import React, {Component} from 'react';
import {Button, Card, CardTitle, Cell, Grid} from "react-mdl";
import ActionPanel from "../Components/adminHomePageComponents/ActionPanel";
import NotificationList from "../Components/adminHomePageComponents/Notifications/NotificationList";
import Logo from "../Components/landingPageComponents/Logo";
import {logout} from "../Components/generalFunctions/logout";

export const AdminPageContext = React.createContext()


export default function homePageAdmin() {
    const [tool, setTool] = React.useState('1');

    return (

        <AdminPageContext.Provider value={[tool, setTool]}>
            <div className="main-container">
                <Header/>
                <Nav/>
                <Grid className="no-padding border">
                    <Cell col={3}>
                        <NotificationList/>
                    </Cell>
                    <Cell col={9} style={{width: 'calc(75%)', margin: 0}}>
                        <ActionPanel/>
                    </Cell>
                </Grid>
            </div>
        </AdminPageContext.Provider>
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

const Nav = () => {
    const [,setTool] = React.useContext(AdminPageContext)
    return (
        <div className={'nav'}>
            <span onClick={() => setTool('1')}>General</span>
            <span onClick={() => setTool('2')}>Manage Consorces</span>
        </div>
    )
}
