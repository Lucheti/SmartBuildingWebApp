import React, {Component} from 'react';
import Chart from "../../Test/Chart";

export default class GeneralView extends Component {

    constructor(props){
        super(props)
        this.state = {
            admin: ""
        }
    }

    getAdminInfo = () => {
        fetch("http://localhost:8080/admins/" + window.sessionStorage.id, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({admin: data.name})
            })
    }

    componentWillMount() {
        this.getAdminInfo();
    }


    render() {

        return (
            <h1>
                {"Hello " + this.state.admin + ","}
                <Chart/>
            </h1>
        )
    }
}
