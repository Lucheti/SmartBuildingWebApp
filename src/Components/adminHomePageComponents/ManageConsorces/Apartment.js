import React, {Component} from 'react';
import DeleteApartmentButton from "./DeleteApartmentButton";
import DisplayApartmentInfoButton from "./ConsorceTools/DisplayApartmentInfoButton";
import { useMoreInfo } from '../../utils/useMoreInfo'

const useBoolean = (initialState) => {
  const [state, set] = React.useState(!!initialState)
  const toggle = () => set(!state)
  return [state, toggle]
}

export const Apartment = ({apartment}) => {

    const {owner,apartmentCode,id} = apartment;
    const [show , toggleShow] = useBoolean()
    const {name} = owner;
    return (
        <li  style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-around'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>{apartmentCode}</div>
            <div>{name}</div>
            <div>
              <i  style={{cursor: "pointer"}} className="far fa-caret-square-down"  onClick={ toggleShow }/>
            </div>
            <div>
                <DeleteApartmentButton apartmentId={id}/>
            </div>
          </div>
          <ApartmentDetails show={show} apartment={apartment}/>
        </li>

    )

}

const ApartmentDetails = ({apartment, show}) => {

  return(
    <div style={useMoreInfo(show)}>
      <p>Owners name: {apartment.owner.name}</p>
      {apartment.tenant && <p>Tennants name: {apartment.tenant.name}</p>}
      
    </div>
  )
}
