import React from 'react';
import {Cell, Grid} from "react-mdl";
import MainView from "../Components/adminHomePageComponents/ActionPanel";
import {logout} from "../Components/generalFunctions/logout";
import { Modal } from '../Components/adminHomePageComponents/modal/Modal'
import { changePanelComponentTo, RenderReducer } from '../Components/adminHomePageComponents/reducers/RenderReducer'
import { GeneralView } from '../Components/adminHomePageComponents/GeneralView'
import { ManageConsorces } from '../Components/adminHomePageComponents/ManageConsorces/ManageConsorces'
import { NotificationList } from '../Components/adminHomePageComponents/Notifications/NotificationList'
import { MyMap } from '../Components/adminHomePageComponents/MyMap'

export const RenderContext = React.createContext()


export default function homePageAdmin() {
    const [state, dispatch] = React.useReducer(RenderReducer, {
      panelComponent: () => <GeneralView/>,
      modal: null,
      modalVisible: false,
      notifications: []
    })

    return (

          <RenderContext.Provider value={{state: state, dispatch: dispatch}}>
            <div className="main-container">
                <Header/>
                <Nav/>
                <Grid className="no-padding border">
                    <Cell col={3}>
                        <NotificationList/>
                    </Cell>
                  <hr/>
                    <Cell col={9} style={{width: 'calc(75%)', margin: 0}}>
                        <MainView component={() => state.panelComponent}/>
                    </Cell>
                </Grid>
            </div>
            <Modal component={state.modal} condition={state.modalVisible}/>
          </RenderContext.Provider>
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
  const {dispatch} = React.useContext(RenderContext)
    return (
        <div className={'nav'}>
            <span onClick={() => dispatch(changePanelComponentTo(() => <GeneralView/>))} style={{cursor: "pointer"}}>General</span>
            <span onClick={() => dispatch(changePanelComponentTo(() => <ManageConsorces/>))} style={{cursor: "pointer"}}>Manage Consorces</span>
          <span onClick={() => dispatch(changePanelComponentTo(() => <MyMap/>))} style={{cursor: "pointer"}}>Map</span>

        </div>
    )
}
