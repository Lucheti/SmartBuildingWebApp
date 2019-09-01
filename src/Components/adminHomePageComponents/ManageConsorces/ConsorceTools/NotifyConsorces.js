import React from 'react'
import {ShowAlertConsorceForm} from "../Consorce";

export default function NotifyConsorces(){

    const showForm = React.useContext(ShowAlertConsorceForm)


    return <input type={"submit"} value={"Alert Consorces"} onClick={showForm}/>


}