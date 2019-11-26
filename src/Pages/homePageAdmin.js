import React, {Component} from 'react';
import {Button, Card, CardTitle, Cell, Grid} from "react-mdl";
import ActionPanel from "../Components/adminHomePageComponents/ActionPanel";
import NotificationList from "../Components/adminHomePageComponents/Notifications/NotificationList";
import Logo from "../Components/landingPageComponents/Logo";
import {logout} from "../Components/generalFunctions/logout";
import { Modal } from '../Components/adminHomePageComponents/modal/Modal'
import { ModalReducer, SHOW_MODAL } from '../Components/adminHomePageComponents/reducers/ModalReducer'

export const AdminPageContext = React.createContext()
export const ModalContext = React.createContext()


export default function homePageAdmin() {
    const [tool, setTool] = React.useState('1');
    const [modalState, modalDispatch] = React.useReducer(ModalReducer, {
      modal: <></>,
      visible: false
    })

    return (

        <AdminPageContext.Provider value={[tool, setTool]}>
          <ModalContext.Provider value={modalDispatch}>
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
            <Modal component={modalState.modal} condition={modalState.visible}/>
          </ModalContext.Provider>
        </AdminPageContext.Provider>
    )
}


const Header = () => {
    return (
        <div className='header'>
            <h4 style={{cursor: "pointer"}}>Smart Building</h4>

            <button onClick={() => logout()} style={{cursor: "pointer"}}>Logout</button>
        </div>
    )
}

const Nav = () => {
    const [,setTool] = React.useContext(AdminPageContext)
    return (
        <div className={'nav'}>
            <span onClick={() => setTool('1')} style={{cursor: "pointer"}}>General</span>
            <span onClick={() => setTool('2')} style={{cursor: "pointer"}}>Manage Consorces</span>
        </div>
    )
}
