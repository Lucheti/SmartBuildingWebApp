import React, {Component} from 'react';
import LandingTitle from "../Spring-Components/LandingTitle";
import GetStartedButton from "../Spring-Components/GetStartedButton";
import {Spring, Transition} from "react-spring/renderprops";
import LoginRegisterTitle from "../Spring-Components/LoginRegisterTitle";
import LoginRegisterSelection from "../Spring-Components/LoginRegisterSelection";
import AdminConsortSelection from "../Spring-Components/AdminConsortSelection";


class DerivatePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            getSarted: false
        }
    }

    toggle = e => {
        e.preventDefault()
        this.setState({
            getSarted: !this.state.getSarted
        })
    }

    render() {
            return(
                <div>
                    <Transition
                        from={{position: 'absolute', marginTop: -500 }}
                        enter={{ marginTop: 0}}
                        leave={{ opacity: 0}}
                    >

                        {toggle =>
                            !this.state.getSarted
                                ? props =>  <LandingView style={props} toggle={this.toggle}/>

                                : props =>  <LoginView style={props}/>
                        }
                    </Transition>
                </div>
                )
            }
}

export default DerivatePage;


function LandingView(props){

        return (
            <div style={props.style} className="container titleContainer">
                <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet"/>

                <LandingTitle style={props.style}/>

                <GetStartedButton style={props.style} toggle={props.toggle} />

            </div>
        )

}

class LoginView extends Component{

    constructor(props){
        super(props)
        this.state={
            login: false,
            register: false,
            admin: false,
            consort: false
        }
    }

    handleLoginRegister= (type) =>{
        if (type == "login")
            this.setState({login: true})
        else
            this.setState({register: true})

    }

    handleAdminConsort= (type) =>{
        if (type == "admin")
            this.setState({admin: true})
        else
            this.setState({consort: true})    }


    render() {
        return (
            <div style={this.props.style} className="container titleContainer">
                <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet"/>

                <Transition
                    items={[this.state.login,this.state.register,this.state.admin,this.state.consort]}
                    from={{position: 'absolute', marginTop: -500 }}
                    enter={{ marginTop: 0}}
                    leave={{ opacity: 0}}
                >

                    <LoginRegisterTitle/>
                    <LoginRegisterSelection onSelectType={this.handleLoginRegister}/>
                    <AdminConsortSelection onSelectEntity={this.handleAdminConsort} />

                </Transition>

            </div>
        )
    }
}