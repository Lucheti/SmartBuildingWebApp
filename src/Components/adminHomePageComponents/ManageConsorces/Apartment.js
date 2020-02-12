import React from 'react';
import DeleteApartmentButton from "./DeleteApartmentButton";
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
        <li>
          <div>
            <div>{apartmentCode}</div>
            <p className={'text-overflow'}>{name}</p>
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

  const {owner} = apartment
  return(
    <div style={{...useMoreInfo(show) , display: 'flex', flexWrap: 'wrap'}}>
      <hr style={{width: '100%'}}/>
      <p style={{width: '40%', textAlign: 'left', margin: '.5rem'}}>Owners name: {owner.name}</p>
      <p style={{width: '40%', textAlign: 'left', margin: '.5rem'}}>Dni: {owner.dni}</p>
      <p style={{width: '40%', textAlign: 'left', margin: '.5rem'}}>Phone: {owner.phone}</p>
      <p style={{width: '40%', textAlign: 'left', margin: '.5rem'}}>Age: {owner.age}</p>

      {apartment.tenant && <p>Tennants name: {apartment.tenant.name}</p>}
      
    </div>
  )
}
