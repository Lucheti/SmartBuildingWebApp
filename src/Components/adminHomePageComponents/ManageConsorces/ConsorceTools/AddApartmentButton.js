import React, {Component} from 'react';
import { ModalContext } from '../../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../../reducers/ModalReducer'
import {AddApartmentForm} from './AddApartmentForm'
import { ApartmentsContext } from '../Consorce'

export const AddApartmentButton = ({id}) => {

    const modalDispatch = React.useContext(ModalContext)
    const { update } = React.useContext(ApartmentsContext)


    return (
        <input value="Add apt" type="submit"
               onClick={() =>
                 modalDispatch({type: SHOW_MODAL,
                 payload: () => <AddApartmentForm updateApartmentList={update} id={id}/>}
                 )}
        />
    )

}