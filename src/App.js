import React, {useEffect} from 'react';
import './App.css';
import 'react-mdl/extra/material'
import Main from "./Pages/Main";

function App (){

        useEffect(() => {
            window.addEventListener("dragover",e => { e.preventDefault(); },false);
            window.addEventListener("drop",e => { e.preventDefault(); },false);
        },[]);


        return (
            <div className="" style={{maxHeight: '100vh', overflow: 'hidden'}}>
                <Main/>
            </div>
        )

}

export default App;


