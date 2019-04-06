import React, { Component } from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import 'react-mdl/extra/material'
import Main from "./Pages/Main";
import {Link} from "react-router-dom"

class App extends Component {

  render() {
    return (
        <div className="">
            <Layout className="main-div">
                <Header title="SmartBuilding" scroll className="header-color">
                    <Navigation className="top-navbar">
                        <Link to="/">Landing</Link>
                        <Link to="/derivate">Derivate</Link>
                        <Link to="/landingpage">ex home</Link>
                        <Link to="/login">login</Link>
                        <Link to="/derivate">Page 3</Link>
                        <Link to="/derivate">Page 4</Link>
                    </Navigation>
                </Header>
                <Content>
                        <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;


