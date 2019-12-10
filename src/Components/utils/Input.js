import React from 'react'

export const Input = (label, ref, placeholder = label, required = true, ...rest) => {

  console.log(...rest)
  return (
    <div className={'input-group'}>
      <p>{label}</p>
      <input ref={ref} type="text" placeholder={placeholder} required={required? 'required' : ''} {...rest}/>
    </div>
  )
}