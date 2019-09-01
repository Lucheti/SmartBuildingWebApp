import React, {Component} from 'react';
import {UpdateConsorcesList} from "../ManageConsorces";

export default class DeleteConsorceButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }


    deleteConsorce = () =>{
        fetch("http://localhost:8080/admins/consorce/"+this.state.id, {
                method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        })
            .then(res => this.updateList())
    }

    updateList = () => {}


    render() {
        return (
                <UpdateConsorcesList.Consumer>
                    {
                        value => {
                            this.updateList = value;
                            return <input type = "submit" value = "Delete" onClick = {this.deleteConsorce}/>
                        }
                    }
                </UpdateConsorcesList.Consumer>

            )
    }
}