import React from 'react'

const show = {
  maxHeight: '20vh',
  transition: 'max-height 1s ease-in',
  overflow: 'scroll',
}

const hide = {
    maxHeight: '0',
    transition: 'max-height 1s ease-out',
    overflow: 'hidden'
  }

export const useMoreInfo = (shouldShow) => shouldShow? show : hide

export const widthTransition = (shouldShow) => shouldShow? fullWidth : hidden

const fullWidth = {
  maxWidth: '20vw',
  transition: 'max-width 1s ease-in',
  overflow: 'scroll'
}

const hidden = {
  maxWidth: '0',
  transition: 'max-width 1s ease-out',
  overflow: 'hidden'
}



const showExp = {
  maxHeight: '100vh',
  maxWidth: '100vw',
  transition: '1s ease-in',
  overflow: 'scroll',
}

const hideExp = {
  maxHeight: '0',
  maxWidth: '0',
  transition: '1s',
  overflow: 'hidden'
}

export const useMoreInfoExp = (shouldShow) => shouldShow? showExp : hideExp