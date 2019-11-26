import React, {Component} from 'react';
import DeleteConsorceButton from "./DeleteConsorceButton";
import ToggleApartmentListButton from "./ToggleApartmentListButton";
import {AddApartmentButton} from "./AddApartmentButton";
import NotifyConsorces from "./NotifyConsorces";



export const ConsorceTools = ({consorce}) => {


    return (
        <div className="consorce-tools">
            <ToggleApartmentListButton/>
            <DeleteConsorceButton id={consorce.id}/>
            <AddApartmentButton id={consorce.id}/>
            <NotifyConsorces/>
        </div>
    )
}
