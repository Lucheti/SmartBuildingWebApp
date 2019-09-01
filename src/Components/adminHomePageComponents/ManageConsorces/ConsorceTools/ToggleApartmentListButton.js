import React from 'react';
import {toggleApartmentList} from "../../functions/toggleApartmentList";

export default function ToggleApartmentListButton({apartmentsList}){

    const [showDetails, setShowDetails] = React.useState(false)

    const toggle = e =>{
        e.preventDefault();
        setShowDetails(!showDetails);
        toggleApartmentList(apartmentsList)
    }


    return (
        <input type="submit" value={showDetails ? "Hide apartments" : "Show apartments"} onClick={toggle}/>
        )

}
