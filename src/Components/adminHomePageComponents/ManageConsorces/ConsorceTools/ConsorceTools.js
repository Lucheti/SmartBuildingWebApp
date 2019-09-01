import React, {Component} from 'react';
import DeleteConsorceButton from "./DeleteConsorceButton";
import ToggleApartmentListButton from "./ToggleApartmentListButton";
import AddApartmentButton from "./AddApartmentButton";
import NotifyConsorces from "./NotifyConsorces";



export default class ConsorceTools extends Component {


    constructor(props) {
        super(props);
        this.state = {
            consorce: props.consorce
        }
    }

    render() {

        const {consorce} = this.state;

        return (

    <div className="consorce-tools">
        <ToggleApartmentListButton apartmentsList={this.props.apartmentsList}/>
        <DeleteConsorceButton id={consorce.id}/>
        <AddApartmentButton consorce={this.props.apartmentsList}/>
        <NotifyConsorces/>
    </div>



    )
    }
}
