import React from 'react'
import { geometryToLayer } from 'leaflet/src/layer/GeoJSON'

export const Input = React.forwardRef(({label , validator = () => true , ...rest}, ref) => {

  const [valid , setValid] = React.useState(true)
  const validate = () => setValid(validator(ref.current.value))

  return(
    <div className={'input-group'}>
      <p>{label}</p>
      <input type="text" ref={ref} {...rest} onChange={ e => validate(e.target.value) } style={{borderColor: valid? 'gray' : 'red'}}/>
    </div>
  )
})
