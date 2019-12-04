import React, {Component} from 'react';
import {UpdateConsorcesList} from "../ManageConsorces";
import DeleteConfirmModal from "../DeleteConfirmModal";
import { BASE_URL } from '../../../../Pages/Main'
import { RenderContext } from '../../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../../reducers/RenderReducer'

export default function DeleteConsorceButton({id}) {
    const updateList = React.useContext(UpdateConsorcesList)
    const {dispatch: modalDispatch} = React.useContext(RenderContext)

    const deleteConsorce = () => {
        fetch(BASE_URL + "/admins/consorce/" + id, {
            method: 'DELETE',
            headers: {
            }
        })
          .then(() => updateList() )
    }

    const submit = () => modalDispatch({type: SHOW_MODAL, payload: () => <DeleteConfirmModal callback={deleteConsorce}/>})

    return (
            <button onClick={ submit }> Delete </button>

    )
}
