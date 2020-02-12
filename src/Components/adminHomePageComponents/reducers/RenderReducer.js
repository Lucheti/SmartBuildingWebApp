import React from 'react'

export const SHOW_MODAL = "show modal"
export const HIDE_MODAL = "hide modal"
export const CHANGE_COMPONENT = "change component"
export const UPDATE_NOTIFICATIONS = "update notifications"
export const SHOW_ALERT = "show alert"
export const HIDE_ALERT = "hide alert"
export const SHOW_CONSORCE_INFO = 'show consorce info'
export const HIDE_CONSORCE_INFO = 'hide consorce info'


export const hideModal = { type: HIDE_MODAL }
export const changeModalComponentTo = (component) => ({type: SHOW_MODAL, payload: component})
export const changePanelComponentTo = (component) => ({type: CHANGE_COMPONENT, payload: component})
export const updateNotifications = (notificaitons) => ({type: UPDATE_NOTIFICATIONS, payload: notificaitons})
export const showAlert = (message) => ({type: SHOW_ALERT, payload: message})
export const hideAlert = () => ({type: HIDE_ALERT})
export const showConsorceInfo = (consorce, component) => ({type: SHOW_CONSORCE_INFO, payload: {name: consorce.name, component: component}})
export const hideConsorceInfo = (consorce) => ({type: HIDE_CONSORCE_INFO, payload: consorce})

export const RenderReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL: return {...state, modal: action.payload, modalVisible: true}
    case HIDE_MODAL: return {...state, modalVisible: false}
    case CHANGE_COMPONENT: return {...state, panelComponent: action.payload}
    case UPDATE_NOTIFICATIONS: return {...state, notifications: action.payload}
    case SHOW_ALERT: return {...state, alertMessage: action.payload, alertVisible: true}
    case HIDE_ALERT: return {...state, alertMessage: '', alertVisible: false}
    case SHOW_CONSORCE_INFO: return {...state, [action.payload.name]: {open: true , component: action.payload.component}}
    case HIDE_CONSORCE_INFO: return {...state, [action.payload.name]: {...state[action.payload.name], open: false}}
  }
}