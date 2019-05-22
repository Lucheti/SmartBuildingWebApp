import React, {Component} from 'react';
import {Spring, Transition} from "react-spring/renderprops";
import ReportProblem from "../Components/consortHomePageComponents/ReportProblem";
import LogoutButton from "../Components/generalComponents/LogoutButton";


class HomePageConsort extends Component{

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
                    <ReportProblem/>
                    <LogoutButton/>
                </div>
                )
            }
}

export default HomePageConsort;