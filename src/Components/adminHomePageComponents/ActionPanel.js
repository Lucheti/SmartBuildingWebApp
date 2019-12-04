import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import { RenderContext } from '../../Pages/homePageAdmin'

const MainView = React.memo( () => {

    const {state} = React.useContext(RenderContext)
    const {panelComponent: Component} = state

    return (
            <Grid className="action-panel">
                <Cell col={12} className="action-panel-view">
                    <Component/>
                </Cell>
            </Grid>
    )
})
export default MainView