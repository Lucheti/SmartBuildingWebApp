import React, {Component} from 'react';
import { RenderContext } from '../../App'


const MainView = React.memo( () => {

    const {state} = React.useContext(RenderContext)
    const {panelComponent: Component} = state

    return (
      <div className="action-panel">
        <Component/>
      </div>
    )
})
export default MainView