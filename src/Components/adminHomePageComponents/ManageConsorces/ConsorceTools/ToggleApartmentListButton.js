import React from 'react';
import {toggleApartmentList} from "../../functions/toggleApartmentList";
import { ApartmentsContext } from '../Consorce'

export default function ToggleApartmentListButton(){

    const {toggle : toggleApartmentList, showApartments: showDetails } = React.useContext(ApartmentsContext)

    const toggle = e =>{
        e.preventDefault();
        toggleApartmentList()
    }

    return (
        <input type="submit" value={showDetails ? "Hide apartments" : "Show apartments"} onClick={toggle}/>
        )

}
