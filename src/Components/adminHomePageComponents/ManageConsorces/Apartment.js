import React, {Component} from 'react';
import DeleteApartmentButton from "./DeleteApartmentButton";
import DisplayApartmentInfoButton from "./ConsorceTools/DisplayApartmentInfoButton";

export default class Apartment extends Component {

    constructor(props){
        super(props);
        this.state = {
            apartment: props.apartment,
        }
    }



    render() {
        const {apartment} = this.state;
        const {owner,apartmentCode,id} = apartment;
        const {name} = owner;
        return (
            <li>
                <span className="number">{apartmentCode}</span>
                <span className="name">{name}</span>
                <DisplayApartmentInfoButton apartmentId={id}/>
                <DeleteApartmentButton apartmentId={id}/>
            </li>
        )
    }
}
