import React from 'react'

export const useBoolean = (initialState = false) => {
  const [bool, set] = React.useState(initialState)
  const toggle = () => set(!bool)
  return [bool,toggle]
}