import React from 'react';
import { HIDE_MODAL } from '../reducers/RenderReducer'
import { RenderContext } from '../../../App'

export default function DeleteConfirmModal({callback}) {

    const {dispatch: modalDispatch} = React.useContext(RenderContext)

    const submit = () => {
        callback()
        modalDispatch({type: HIDE_MODAL})
    }

    return (
        <div>
                <div style={{padding: '0 1rem 1rem 1rem',display: "flex", flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', width: '30rem'}}>
                    <h3>Confirm Delete Request</h3>
                    <p>Are you sure you want to delete?</p>
                    <p>This action can not be undone</p>
                    <button onClick={ submit } style={{border: 'none',cursor: "pointer",background: 'red', color: 'white', padding: '.5rem', fontSize: '1.2rem', marginTop: '1rem'}}>
                        Confirm Delete
                    </button>
                </div>
        </div>
    );
}
