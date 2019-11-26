import React from 'react'
import { ModalContext } from '../../../Pages/homePageAdmin'
import { HIDE_MODAL } from '../reducers/ModalReducer'

export const Modal = ({component: Component, condition}) => {

  const dispatch = React.useContext(ModalContext)
  const closeModal = () => dispatch({type: HIDE_MODAL});

  if (!condition) return null

  return(
    <div style={modalStyles}>
      <div id="backdrop" onClick={ closeModal } style={modalStyles}/>
      <div style={containerStyles} onClick={() => {}}>
        <button style={modalButton} onClick={ closeModal }><i className={'fa fa-close'}/></button>
        <Component/>
      </div>
    </div>
  )
}

const modalStyles = {
  background: 'rgba(0,0,0,.5)',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const containerStyles = {
  position: 'relative',
  background: 'rgb(255,255,255)',
  boxShadow: '0 0 20px rgba(0,0,0,.5)',
  borderRadius: '1rem',
  padding: '2rem',
}

const modalButton = {
  border: 'none',
  background: 'none',
  float: 'right'
}