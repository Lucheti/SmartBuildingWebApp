import React, {Component} from 'react';
import DeleteConsorceButton from "./DeleteConsorceButton";
import ToggleApartmentListButton from "./ToggleApartmentListButton";
import {AddApartmentButton} from "./AddApartmentButton";
import NotifyConsorces from "./NotifyConsorces";



export const ConsorceTools = ({consorce}) => {


    return (
        <div className="consorce-tools">
          <ToggleApartmentListButton/>
          <NotifyConsorces/>
          <AddApartmentButton id={consorce.id}/>
          <DeleteConsorceButton id={consorce.id}/>
        </div>
    )
}
