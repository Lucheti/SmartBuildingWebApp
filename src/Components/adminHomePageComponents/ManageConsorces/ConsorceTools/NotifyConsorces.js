import React from 'react'
import {AlertContext} from "../Consorce";
import { ModalContext } from '../../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../../reducers/ModalReducer'
import AlertConsorceForm from './AlertConsorceForm'

export default function NotifyConsorces(){

    const modalDispatch = React.useContext(ModalContext);
    const {update: getAlerts, consorce} = React.useContext(AlertContext)

    return <input type={"submit"} value={"Alert Consorces"} onClick={() => modalDispatch({type: SHOW_MODAL, payload: () => <AlertConsorceForm consorce={consorce} update={getAlerts}/>})}/>


}
