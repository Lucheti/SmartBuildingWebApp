import React from 'react'
import {AlertContext} from "../Consorce";
import { RenderContext } from '../../../../Pages/homePageAdmin'
import { SHOW_MODAL } from '../../reducers/RenderReducer'
import AlertConsorceForm from './AlertConsorceForm'

export default function NotifyConsorces(){

    const {dispatch: modalDispatch} = React.useContext(RenderContext);
    const {update: getAlerts, consorce} = React.useContext(AlertContext)
    const handle = () => modalDispatch({type: SHOW_MODAL, payload: () => <AlertConsorceForm consorce={consorce} update={getAlerts}/>})

    return <button onClick={ handle }>Alert Consorces</button>
}
