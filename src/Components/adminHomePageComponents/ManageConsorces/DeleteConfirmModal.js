import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {UpdateApartmentsList} from "./Consorce";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function DeleteConfirmModal({apartmentId}) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    const updateApartmentList = React.useContext(UpdateApartmentsList)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteApartment = () => {
        fetch("http://192.168.0.185:8080/apartments/"+apartmentId, {
            method: 'DELETE',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => updateApartmentList())
    };


    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Confirm Delete Request</h2>
                    <p id="simple-modal-description">
                        Are you sure you want to delete?
                    </p>
                    <p id="simple-modal-description">
                        This action can not be undone
                    </p>
                    <div style={{display: "flex"}}>
                        <div onClick={deleteApartment} style={{ cursor: "pointer",backgroundColor: "red",height: 50,width: 150, borderRadius: 8, marginRight:50, marginLeft: 25, display:"flex", alignItems: "center", justifyContent:"center", flexDirection:"row"}}>
                            <i style={{flex:2, marginTop: 0, marginLeft: 10}} className="fas fa-trash-alt"/>
                            <p style={{flex:7, marginBottom:0, marginRight: 10}}>Confirm Delete</p>
                        </div>
                        <div onClick={handleClose} style={{cursor: "pointer",backgroundColor: "green" ,height: 50,width: 150, borderRadius: 8,  display:"flex" ,alignItems: "center", justifyContent:"center", flexDirection:"row"}}>
                            <i style={{flex:2, marginTop:0, marginLeft: 10}} className="fa fa-window-close"/>
                            <p style={{flex:7, marginBottom: 0, marginRight: 10}}> Cancel</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
