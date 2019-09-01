import React, {Component} from 'react';
import {UpdateApartmentsList} from './Consorce'
import {toggleApartmentList} from "../functions/toggleApartmentList";
import DeleteConfirmModal from "./DeleteConfirmModal";

const useBoolan = (initialState) => {
    const [bool, setBool] = React.useState(initialState)
    const toggle = () => {setBool(!bool)}
    return[bool, toggle]
}


export default function DeleteApartmentButton({apartmentId}){

    const [showModal, toggleModal] = useBoolan(false)


        return (
            <>
            <i style={{cursor: "pointer"}} className="fa fa-trash" onClick={toggleModal}/>
            {showModal && <DeleteConfirmModal apartmentId={apartmentId}/>}
            </>
        )
}
