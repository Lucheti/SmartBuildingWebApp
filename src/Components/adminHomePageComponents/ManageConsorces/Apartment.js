import React, {Component} from 'react';
import DeleteApartmentButton from "./DeleteApartmentButton";
import DisplayApartmentInfoButton from "./ConsorceTools/DisplayApartmentInfoButton";

export const Apartment = ({apartment}) => {

    const {owner,apartmentCode,id} = apartment;
    const {name} = owner;
    return (
        <li  style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-around'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>{apartmentCode}</div>
            <div>{name}</div>
            <div>
              <i  style={{cursor: "pointer"}} className="far fa-caret-square-down" />
            </div>
            <div>
                <DeleteApartmentButton apartmentId={id}/>
            </div>
          </div>
          <ApartmentDetails apartment={apartment}/>
        </li>

    )

}

const ApartmentDetails = ({apartment}) => {
  return(
    <div>
      <p>{apartment.consorce.user.name}</p>
    </div>
  )
}