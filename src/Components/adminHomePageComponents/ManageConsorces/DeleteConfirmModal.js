import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BASE_URL } from '../../../Pages/Main'

export default function DeleteConfirmModal({callback}) {

    return (
        <div>
                <div>
                    <h2>Confirm Delete Request</h2>
                    <p>Are you sure you want to delete?</p>
                    <p>This action can not be undone</p>
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <div onClick={ callback } style={{border: '2px solid red', borderRadius: '1.5rem' ,cursor: "pointer", color: 'red',height: 50,width: 150, display:"flex", alignItems: "center", justifyContent:"center", flexDirection:"row"}}>
                            <p style={{marginBottom:0}}>Confirm Delete</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
