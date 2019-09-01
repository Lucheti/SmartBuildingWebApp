import React, {Component} from 'react';
import {UpdateConsorcesList} from './ManageConsorces'
import ConsorceTools, {ShowAlertConsorceForm} from "./Consorce";
export default class AddConsorceButton extends Component {

    constructor(props){
        super(props)
        this.state = {
            addConsorceName: "",
            consorceList: props.consorcesList,

        }
    }

    updateAddConsorceName = (e) =>{
        this.setState({
            addConsorceName: e.target.value,
        })
    }

    addConsorce = e => {
        e.preventDefault();
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
            .then(res => {
                if (res.ok){
                    this.setState({addConsorceName: ""});
                    this.updateList()
                }
            }
            )
    };

    updateList = () => {}


    render() {
        return (
            <div className={'add-consorce'}>
                <UpdateConsorcesList.Consumer>
                    {value => this.updateList = value}
                </UpdateConsorcesList.Consumer>
                <form>
                    <div className={'file-upload'}>
                        <label>
                            <i className={'fa fa-plus'}/>
                            Upload Img
                            <input type="file" required="required"/>
                        </label>
                    </div>
                    <div className='inputs'>
                        <input value={this.state.addConsorceName} onChange={this.updateAddConsorceName}/>
                        <input type="submit" value="+" onClick={this.addConsorce} required="required"/>
                    </div>
                </form>

            </div>

        )
    }
}
