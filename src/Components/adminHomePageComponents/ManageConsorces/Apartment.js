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
            <li style={{flex:1, flexDirection:"row"}}>
                <div style={{flex:1}} >{apartmentCode}</div>
                <div style={{flex:1}}>{name}</div>
                <div style={{flex:1}}>
                    <DisplayApartmentInfoButton apartmentId={id}/>
                </div>
                <div style={{flex:1}}>
                    <DeleteApartmentButton apartmentId={id}/>
                </div>
            </li>
        )
    }
}
