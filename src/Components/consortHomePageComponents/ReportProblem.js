import React, {Component} from 'react';

export default class ReportProblem extends Component {

    constructor(props){
        super(props);
        this.state = {
            description: "",
            category: ""
        }
    }

    updateDesc = evt => {
        evt.preventDefault();
        this.setState({description: evt.target.value})
    }

    updateCategory = evt => {
        evt.preventDefault();
        this.setState({category: evt.target.value})
    }

    notifyProblem = evt =>{
        evt.preventDefault();
        fetch('http://localhost:8080/notifications', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: this.state.description,
                category: {
                    name: this.state.category
                },
                apartment: {
                    id: window.sessionStorage.id
                }
            })


        })    }



    render() {
        return (
            <form>
                <input placeholder="Description" onChange={this.updateDesc}/>
                <input placeholder="Category" onChange={this.updateCategory}/>
                <input type="submit" onClick={this.notifyProblem}/>
            </form>
        )
    }
}