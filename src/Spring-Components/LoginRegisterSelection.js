import React, {Component} from 'react';

export default class LoginRegisterSelection extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginOpen: true,
            registerOpen: true
        }
    }

    clickLogin = e =>{
        this.setState({
            loginOpen: false
        })
        this.props.onSelectType("login")
    }


    clickRegister = e =>{
        this.setState({
            registerOpen: false
        })
        this.props.onSelectType("register")
    }

    render(){
        return(
            <div className="centeredContainer">
                {this.state.registerOpen && <h1 onClick={this.clickLogin} className="pointer">Login</h1>}
                {(this.state.registerOpen && this.state.loginOpen) && <h1 className="optional"> -or- </h1>}
                {this.state.loginOpen && <h1 onClick={this.clickRegister} className="pointer">Register</h1>}
            </div>
        )
    }

}