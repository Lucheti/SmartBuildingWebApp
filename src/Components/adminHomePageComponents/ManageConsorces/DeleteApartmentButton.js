import React from 'react';
import DeleteConfirmModal from "./DeleteConfirmModal";
import {ApartmentsContext} from "./Consorce";
import { BASE_URL } from '../../../Pages/Main'
import { ModalContext } from '../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../reducers/ModalReducer'

const useBoolan = (initialState) => {
    const [bool, setBool] = React.useState(initialState)
    const toggle = () => {setBool(!bool)}
    return[bool, toggle]
}



export default function DeleteApartmentButton({apartmentId}){

    const dispatchModal = React.useContext(ModalContext)
    const {update} = React.useContext(ApartmentsContext)

    const deleteApartment = () => {
        fetch(BASE_URL + "/apartments/"+apartmentId, {
            method: 'DELETE',
            headers: {
            }
        }).then(res => {
            if (res.ok){
                update()
            }
        })
    };

        return (
            <>
            <i style={{cursor: "pointer"}} className="fa fa-trash" onClick={() => dispatchModal({type: SHOW_MODAL, payload: () => <DeleteConfirmModal callback={deleteApartment}/>})}/>

            </>
        )
}
