import React, {Component} from 'react';
import {NotiList} from "../adminHomePageComponents/Notifications/NotificationList";
import {updateNotificationList} from "../adminHomePageComponents/functions/updateNotificationList";
import { BASE_URL } from '../../Pages/Main'

export default class ReportProblem extends Component {


    constructor(props){
        super(props);
        this.state = {
            description: "",
            category: "",
            categorys: []
        }
    }

    updateFields = evt => {
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value})
    }

    emptyFields = () => {
        this.setState({
            description: "",
            category: ""
        })
    }

    notifyProblem = evt =>{
        evt.preventDefault();
        fetch(BASE_URL + '/notifications', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: this.state.description,
                category: {
                    name: this.state.category
                },
                user: {
                    id: window.sessionStorage.id
                }
            })


        })
            .then(res => {
                if (res.ok) {
                    updateNotificationList(this.props.list);
                    this.emptyFields();
                }
            } )
    }

    getCategorys = () => {
        fetch(BASE_URL + "/categorys",{
            method: 'GET',
            headers: {
            }
        }).then(res => res.json())
            .then(data => {
                this.setState({categorys: data})})
        }

    componentWillMount() {
        this.getCategorys();
        }


    render() {
        const {category , description} = this.state;
        return (
            <div className="report-problem">
                <h1 id={"report-problemh1"}>Have a Problem?</h1>
                <h4 id="report-problemh4">Let your admin know!</h4>
            <form>
                <input value={category} type="text" placeholder="Category" name="category" onChange={this.updateFields} list="categorys" autoComplete="off"/>
                <input value={description} type="text" placeholder="Description" name="description" onChange={this.updateFields}/>
                <input type="submit" value="Send" onClick={this.notifyProblem}/>
                    <datalist id="categorys">
                        {this.state.categorys.map( category => <option value={category.name}/>)}
                    </datalist>
            </form>
            </div>
        )
    }
}
