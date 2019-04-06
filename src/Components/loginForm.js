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
        <div className="main-box" id="sub-box">
            <Grid id="noPadding">
                {!this.state.adminClicked && <Cell col={6} style={{margin: 0, width: "50%"}}>
                    <h4 className="alternativeButton" onClick={this.adminCliked}>Admin</h4>
                </Cell>}
                {this.state.adminClicked && <Cell col={6} style={{margin: 0, width: "50%" ,  background: "linear-gradient(to bottom, var(--left-red-darker), var(--right-red-darker))"
                }}>
                    <h4 className="alternativeButton" onClick={this.adminCliked}>Admin</h4>
                </Cell>}
                {!this.state.consorClicked && <Cell col={6} style={{margin: 0, width: "50%"}}>
                    <h4 className="alternativeButton" onClick={this.consorCliked}>Consor</h4>
                </Cell>}
                {this.state.consorClicked && <Cell col={6} style={{margin: 0, width: "50%" ,  background: "linear-gradient(to bottom, var(--left-red-darker), var(--right-red-darker))"
                }}>
                    <h4 className="alternativeButton" onClick={this.consorCliked}>Consor</h4>
                </Cell>}
            </Grid>
            {(this.state.isAdminLogin || this.state.isConsorLogin) &&
            <Grid style={{background: "linear-gradient(to top, var(--left-red-darker), var(--right-red-darker))"}}>
                <Cell col={12}>
                    {this.state.isAdminLogin && <AdminLoginForm/>}
                    {this.state.isConsorLogin && <ConsortLoginForm/>}
                </Cell>
            </Grid>}
        </div>
        )}
}