import React from 'react';
import { ApartmentsContext } from '../Consorce'

export default function ToggleApartmentListButton(){

    const {toggle : toggleApartmentList, showApartments: showDetails } = React.useContext(ApartmentsContext)

    const toggle = e =>{
        e.preventDefault();
        toggleApartmentList()
    }

    return (
      <button onClick={toggle}>{"Apartments list"}</button>
        )

}

