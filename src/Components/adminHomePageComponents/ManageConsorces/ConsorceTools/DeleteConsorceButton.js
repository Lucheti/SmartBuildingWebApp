import React, {Component} from 'react';
import {UpdateConsorcesList} from "../ManageConsorces";
import DeleteConfirmModal from "../DeleteConfirmModal";

const useBoolan = (initialState) => {
    const [bool, setBool] = React.useState(initialState)
    const toggle = () => {setBool(!bool)}
    return[bool, toggle]
}

export default function DeleteConsorceButton({id}) {
    const updateList = React.useContext(UpdateConsorcesList)
    const [showModal,toggleModal] = useBoolan(false)

    const deleteConsorce = () => {
        fetch("http://192.168.0.185:8080/admins/consorce/" + id, {
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        })
            .then(res => {
                if (res.ok) {
                    updateList()
                }
            })
    }

    return (
        <>
            {showModal && <DeleteConfirmModal callback={deleteConsorce}/>}
            <input type="submit" value="Delete" onClick={toggleModal}/>
        </>

    )
}
