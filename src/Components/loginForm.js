import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import AdminLoginForm from "./adminLoginForm"
import ConsortLoginForm from "./consortLoginForm"

export default class loginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            isAdminLogin: false,
            isConsorLogin: false,
            adminClicked:false,
            consorClicked: false,
        }
    }

    showAdminLogin = () => {
        this.setState({
            isAdminLogin: true,
            isConsorLogin: false
        })
    }

    showConsorLogin = () => {
        this.setState({
            isAdminLogin: false,
            isConsorLogin: true
        })
    }

    adminCliked = () => {
        this.showAdminLogin(this)
        this.setState({
            adminClicked: true,
            consorClicked: false
        })
    }
    consorCliked = () => {
        this.showConsorLogin(this)
        this.setState({
            adminClicked: false,
            consorClicked: true
        })
    }


    render() {
        return(
        <div className="main-box" id="sub-box" style={{background: "none"}}>
            <Grid id="noPadding">
                {/*~~~~~~~~~~~~~~ADMIN BUTTON~~~~~~~~~~~~~~~~~~~*/}
                <Cell col={6} className={"cell" + (this.state.consorClicked? "Clicked": "")}>
                    <h4 className="alternativeButton" onClick={this.adminCliked}>Admin</h4>
                </Cell>

                {/*~~~~~~~~~~~~~~CONSOR BUTTON~~~~~~~~~~~~~~~~~~~*/}
                <Cell col={6} className={"cell" + (this.state.adminClicked? "Clicked": "")}>
                    <h4 className="alternativeButton" onClick={this.consorCliked}>Consor</h4>
                </Cell>

            </Grid>
            {(this.state.isAdminLogin || this.state.isConsorLogin) &&
            <Grid style={{background: "linear-gradient(to top, var(--left-red), var(--right-red))"}}>
                <Cell col={12}>
                    {this.state.isAdminLogin && <AdminLoginForm/>}
                    {this.state.isConsorLogin && <ConsortLoginForm/>}
                </Cell>
            </Grid>}
        </div>
        )}
}