import React, {Component} from 'react';
import {UpdateConsorcesList} from "../ManageConsorces";
import DeleteConfirmModal from "../DeleteConfirmModal";
import { BASE_URL } from '../../../../Pages/Main'
import { ModalContext } from '../../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../../reducers/ModalReducer'

export default function DeleteConsorceButton({id}) {
    const updateList = React.useContext(UpdateConsorcesList)
    const modalDispatch = React.useContext(ModalContext)

    const deleteConsorce = () => {
        fetch(BASE_URL + "/admins/consorce/" + id, {
            method: 'DELETE',
            headers: {
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
            <input type="submit" value="Delete"
                   onClick={() => modalDispatch({type: SHOW_MODAL,
                       payload: () => <DeleteConfirmModal callback={deleteConsorce}/>
                   })}/>
        </>

    )
}
