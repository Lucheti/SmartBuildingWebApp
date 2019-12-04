import React from 'react'

const show = {
  maxHeight: '20vh',
  transition: 'max-height 1s ease-in',
  overflow: 'scroll',
}

const hide = () => { return {
    maxHeight: '0',
    transition: 'max-height 1s ease-out',
    overflow: 'hidden',
  }
}

export const useMoreInfo = (shouldShow) => shouldShow? show : hide()