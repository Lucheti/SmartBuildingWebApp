import React, {Component} from 'react';
import MyModal from "./Modal";

export default class DisplayApartmentInfoButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apartmentId: props.apartmentId,
            apartmentList: props.apartmentList
        }
    }

    render() {
        return (
            <MyModal apartmentId={this.state.apartmentId}/>
        )
    }
}
