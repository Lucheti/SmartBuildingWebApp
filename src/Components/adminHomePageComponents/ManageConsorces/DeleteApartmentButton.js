import React from 'react';
import DeleteConfirmModal from "./DeleteConfirmModal";
import {UpdateApartmentsList} from "./Consorce";

const useBoolan = (initialState) => {
    const [bool, setBool] = React.useState(initialState)
    const toggle = () => {setBool(!bool)}
    return[bool, toggle]
}



export default function DeleteApartmentButton({apartmentId}){

    const [showModal, toggleModal] = useBoolan(false)
    const updateApartmentList = React.useContext(UpdateApartmentsList)

    const deleteApartment = () => {
        fetch("http://192.168.0.185:8080/apartments/"+apartmentId, {
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => updateApartmentList())
    };

        return (
            <>
            <i style={{cursor: "pointer"}} className="fa fa-trash" onClick={toggleModal}/>
            {showModal && <DeleteConfirmModal callback={deleteApartment}/>}
            </>
        )
}
