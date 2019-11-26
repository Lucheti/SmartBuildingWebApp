import React, {Component} from 'react';
import {Button, Cell, Grid} from "react-mdl";
import {ManageConsorces} from "./ManageConsorces/ManageConsorces";
import { GeneralView } from './GeneralView'
import {logout} from "../generalFunctions/logout";
import {AdminPageContext} from "../../Pages/homePageAdmin";


export default function ActionPanel() {

        const [tool,] = React.useContext(AdminPageContext);


        return (
                <Grid className="action-panel">
                    <Cell col={12} className="action-panel-view">
                        {tool === '1'?
                            <GeneralView/>
                            :
                            <ManageConsorces/>
                        }
                    </Cell>
                </Grid>
        )
}

