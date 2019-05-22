import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material'
import Main from "./Pages/Main";

class App extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

  render() {

    return (
      <div className="">
                <Main/>
    </div>
    )
  }
}

export default App;


