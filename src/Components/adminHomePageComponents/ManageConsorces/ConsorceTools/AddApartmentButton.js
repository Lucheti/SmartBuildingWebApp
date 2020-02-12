import React from 'react';
import { SHOW_MODAL } from '../../reducers/RenderReducer'
import {AddApartmentForm} from './AddApartmentForm'
import { ApartmentsContext } from '../Consorce'
import { RenderContext } from '../../../../App'

export const AddApartmentButton = ({id}) => {

  const {dispatch: modalDispatch} = React.useContext(RenderContext)
  const { update } = React.useContext(ApartmentsContext)

  const handle = () => modalDispatch({type: SHOW_MODAL, payload: () => <AddApartmentForm updateApartmentList={update} id={id}/>})

  return  (
    <button onClick={ handle }>Add apartment</button>
  )

}