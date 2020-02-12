import React from 'react';
import {UpdateConsorcesList} from "../ManageConsorces";
import DeleteConfirmModal from "../DeleteConfirmModal";
import { BASE_URL } from '../../../../Pages/Main'
import { SHOW_MODAL } from '../../reducers/RenderReducer'
import { RenderContext } from '../../../../App'

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
