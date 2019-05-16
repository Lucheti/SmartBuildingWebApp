import React, {Component} from 'react';
import {Button} from "react-mdl";

export default class AddConsorceButton extends Component {

    constructor(props){
        super(props)
        this.state = {
            addConsorceName: "",
        }
    }

    updateAddConsorceName = (e) =>{
        this.setState({
            addConsorceName: e.target.value,
        })
    }

    addConsorce = e => {
        e.preventDefault()
        fetch("http://localhost:8080/admins/"+window.sessionStorage.id+"/consorce",{
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": this.state.addConsorceName,
            })
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .then(this.props.updateConsorcesList())
    }

    render() {
        return (
            <div>
                <input value={this.state.addConsorceName} onChange={this.updateAddConsorceName}/>
                <Button onClick={this.addConsorce}>addConsorce</Button>
            </div>
        )
    }
}