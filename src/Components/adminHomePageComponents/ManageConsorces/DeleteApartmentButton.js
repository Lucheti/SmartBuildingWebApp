import React, {Component} from 'react';
import {UpdateApartmentsList} from './Consorce'

export default class DeleteApartmentButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apartmentId: props.apartmentId,
            apartmentList: props.apartmentList
        }
    }

    deleteApartment = () => {
        fetch("http://192.168.0.185:8080/apartments/"+this.state.apartmentId, {
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => this.updateApartmentList())
    }

    updateApartmentList = () => {};

    render() {
        return (
            <UpdateApartmentsList.Consumer>
                {
                    value => {
                        this.updateApartmentList = value;
                        return <span className="badge" onClick={this.deleteApartment}><i className="fa fa-trash"/></span>
                    }
                }
            </UpdateApartmentsList.Consumer>
        )
    }
}
