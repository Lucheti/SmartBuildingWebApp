import React from 'react'

export const SHOW_MODAL = "show modal"
export const HIDE_MODAL = "hide modal"
export const CHANGE_COMPONENT = "change component"
export const UPDATE_NOTIFICATIONS = "update notifications"

export const HIDE_MODAL_ACTION = { type: HIDE_MODAL }
export const changeModalComponentTo = (component) => {return {type: SHOW_MODAL, payload: component}}
export const changePanelComponentTo = (component) => {return {type: CHANGE_COMPONENT, payload: component}}
export const updateNotifications = (notificaitons) => {return {type: UPDATE_NOTIFICATIONS, payload: notificaitons}}

export const RenderReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL: return {...state, modal: action.payload, modalVisible: true}
    case HIDE_MODAL: return {...state, modalVisible: false}
    case CHANGE_COMPONENT: return {...state, panelComponent: action.payload}
    case UPDATE_NOTIFICATIONS: return {...state, notifications: action.payload}
  }
}