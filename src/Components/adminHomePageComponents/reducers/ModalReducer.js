import React from 'react'

export const SHOW_MODAL = "show modal"
export const HIDE_MODAL = "hide modal"

export const ModalReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL: return {...state, modal: action.payload, visible: true}
    case HIDE_MODAL: return {...state, visible: false}
  }
}