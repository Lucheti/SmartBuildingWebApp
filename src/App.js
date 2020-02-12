import React, {useEffect} from 'react';
import './App.css';
import 'react-mdl/extra/material'
import Main from "./Pages/Main";
import { RenderReducer } from './Components/adminHomePageComponents/reducers/RenderReducer'
import { GeneralView } from './Components/adminHomePageComponents/GeneralView'

export const RenderContext = React.createContext()


function App (){

  const [state, dispatch] = React.useReducer(RenderReducer, {
    panelComponent: () => <GeneralView/>,
    modal: null,
    modalVisible: false,
    notifications: [],
    alertMessage: '',
    alertVisible: false
  })

        useEffect(() => {
            window.addEventListener("dragover",e => { e.preventDefault(); },false);
            window.addEventListener("drop",e => { e.preventDefault(); },false);
        },[]);


        return (
          <RenderContext.Provider value={{state: state, dispatch: dispatch}}>
            <div>
                <Main/>
            </div>
          </RenderContext.Provider>
        )

}

export default App;


