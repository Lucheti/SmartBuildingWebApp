import React from 'react'
import { HIDE_MODAL } from '../reducers/RenderReducer'
import { RenderContext } from '../../../App'

export const Modal = ({component: Component, condition}) => {

  const {dispatch} = React.useContext(RenderContext)
  const closeModal = () => dispatch({type: HIDE_MODAL});

  if (!condition) return null

  return(
    <div style={modalStyles}>
      <div id="backdrop" onClick={ closeModal } style={modalStyles}/>
      <div style={containerStyles} onClick={() => {}}>
        <div style={buttonContainer}>
          <button style={modalButton} onClick={ closeModal }><i className={'fa fa-close'}/></button>
        </div>
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
  padding: '1rem 2rem',
  display: 'flex',
  flexDirection: 'column'
}

const modalButton = {
  border: 'none',
  background: 'none',
  float: 'right',
  width: 'fit-content',
  padding: '.5rem'
}
const buttonContainer = {
  display: 'flex',
  justifyContent: 'flex-end'
}