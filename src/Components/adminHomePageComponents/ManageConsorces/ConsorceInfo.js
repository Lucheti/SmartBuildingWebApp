import React from 'react'
import { RenderContext } from '../../../App'
import { useMoreInfoExp } from '../../utils/useMoreInfo'
import { hideConsorceInfo } from '../reducers/RenderReducer'

export const ConsorceInfo = ({component: Component, open, consorce}) => {

  const {dispatch} = React.useContext(RenderContext)

  return (
    <div className={'consorce'} style={{...useMoreInfoExp(open), justifyContent: 'unset'}}>
      <div className={'consorce-info-header'}>
        <button onClick={() => dispatch(hideConsorceInfo(consorce))}><i className="fas fa-arrow-left fa-2x"/></button>
      </div>
      <Component/>
    </div>
  )
}