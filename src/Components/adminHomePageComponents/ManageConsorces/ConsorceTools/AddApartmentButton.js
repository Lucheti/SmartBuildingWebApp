import React, {Component} from 'react';

export default class AddApartmentButton extends Component {

    constructor(props) {
        super(props);
    }


    toggle = evt => {
        evt.preventDefault();
        this.props.consorce.setState(prev => {
            return {
                showAddApartmentForm: !prev.showAddApartmentForm
            }
        })
    }

    render() {
        return (
            <input value="Add apt" type="submit" onClick={this.toggle}/>
        )
    }
}