import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BASE_URL } from '../../../Pages/Main'
import { RenderContext } from '../../../Pages/homePageAdmin'
import { HIDE_MODAL } from '../reducers/RenderReducer'

export default function DeleteConfirmModal({callback}) {

    const {dispatch: modalDispatch} = React.useContext(RenderContext)

    const submit = () => {
        callback()
        modalDispatch({type: HIDE_MODAL})
    }

    return (
        <div>
                <div>
                    <h2>Confirm Delete Request</h2>
                    <p>Are you sure you want to delete?</p>
                    <p>This action can not be undone</p>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <div onClick={ submit } style={{border: '2px solid red', borderRadius: '1.5rem' ,cursor: "pointer", color: 'red',height: 50,width: 150, display:"flex", alignItems: "center", justifyContent:"center", flexDirection:"row"}}>
                            <p style={{marginBottom:0}}>Confirm Delete</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
