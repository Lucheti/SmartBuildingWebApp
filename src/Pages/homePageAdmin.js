import React from 'react';
import {Grid} from "react-mdl";
import MainView from "../Components/adminHomePageComponents/ActionPanel";
import {logout} from "../Components/generalFunctions/logout";
import { Modal } from '../Components/adminHomePageComponents/modal/Modal'
import {
  changePanelComponentTo,
  hideAlert,
} from '../Components/adminHomePageComponents/reducers/RenderReducer'
import { GeneralView } from '../Components/adminHomePageComponents/GeneralView'
import { ManageConsorces } from '../Components/adminHomePageComponents/ManageConsorces/ManageConsorces'
import { MyMap } from '../Components/adminHomePageComponents/MyMap'
import { widthTransition } from '../Components/utils/useMoreInfo'
import { RenderContext } from '../App'



export default function homePageAdmin() {

    const {state} = React.useContext(RenderContext)

    return (
          <div>
            <div className="main-container">
                <Header/>
                <Nav/>
                <hr style={{margin: 0}}/>
                <MainView component={() => state.panelComponent}/>
            </div>
            <Modal component={state.modal} condition={state.modalVisible}/>
            <Alert/>
          </div>
    )
}


const Header = () => {
    return (
        <div className='header'>
            <h4 style={{cursor: "pointer"}} className={'resizable-h'}>Smart Building</h4>
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

const Alert = () => {
  const {state ,dispatch} = React.useContext(RenderContext)
  const {alertMessage , alertVisible} = state
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() =>{
    if (alertVisible) {
      setTimeout(() => setVisible(true), 1000)
      setTimeout(() => setVisible(false), 4000)
      setTimeout(() => {
        dispatch(hideAlert())
      }, 6000)
    }
  },[alertVisible])

  if (!alertVisible) return null

  return (
    <div style={{padding: '1rem 2rem', background: 'red', zIndex: 999999999, position: 'absolute', right: 0, bottom: 0, margin: '1rem', display: 'flex', justifyContent: 'space-between', borderRadius: '50px', boxShadow: '0 0 10px rgba(0,0,0,.3)'}}>
      <i className="fas fa-exclamation-triangle fa-2x" style={{margin: visible? '0 1.5rem 0 0' : '0px' , color: 'white', transition: 'margin 1s ease-in-out'}}/>
      <div style={{...widthTransition(visible),maxHeight:'1.75rem',overflow: 'hidden'}}>
        <p style={{margin: 0, fontSize: '1.3rem' ,color: 'white' ,flexDirection: 'column', display: 'flex',justifyContent: 'center',overflow: 'hidden',...widthTransition(visible)}}>{alertMessage}</p>
      </div>
    </div>
  )
}