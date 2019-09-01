import React, {Component} from 'react';
import {UpdateApartmentsList} from '../Consorce'

export default class AddApartmentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            owner: "",
            email: "",
            apartmentCode: "",
            pending: false,
        }
    }

    addApartment = evt => {
        evt.preventDefault();
        this.setState({pending: true})
        fetch("http://localhost:8080/admins/consorce/" + this.props.id + "/apartment",{
            method: "POST",
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "owner": {
                    "email": this.state.email,
                    "name": this.state.owner,
                    "role": "consort"
                },
                "apartmentCode": this.state.apartmentCode
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.updateApartmentList();
                this.resetFields()
                this.setState({pending: false})
            })
    }

    resetFields = () => {
        this.setState({
            owner: "",
            email: "",
            apartmentCode: ""
        })
    }

    updateField = evt => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    updateApartmentList = () => {};


    render() {
            const {owner, email, apartmentCode, pending} = this.state;
        return (
            <UpdateApartmentsList.Consumer>
                {
                    value => {
                    this.updateApartmentList = value;

                        return(
                        <form className="consorce-form">
                            {pending && <h4 style={{color: "red"}}>Sending Email</h4>}
                            <h4>New Apart</h4>
                            <input name="owner" type="text" placeholder="owner {ej: lucas}" value={owner} onChange={this.updateField} required="required"/>
                            <input name="apartmentCode" type="text" placeholder="apartmentCode {ej: 1A}" value={apartmentCode} onChange={this.updateField} required="required"/>
                            <input name="email" type="text" placeholder="email {ej: a@a.com}" value={email} onChange={this.updateField} required="required"/>
                            <input type="submit" value={"Add apt"} onClick={this.addApartment}/>
                        </form>
                        )
                    }
                }
            </UpdateApartmentsList.Consumer>
        )
    }
}