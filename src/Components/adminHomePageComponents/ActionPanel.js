import React, {Component} from 'react';
import {Button, Cell, Grid} from "react-mdl";
import {ManageConsorces} from "./ManageConsorces";
import GeneralView from "./GeneralView";

export default class ActionPanel extends Component {

    constructor(props){
        super(props)
        this.state = {
            openedTool: "1"
        }
    }

    toggleTool = toolButton =>{
        this.setState({openedTool: toolButton.target.id});
    }

    render() {
            const {openedTool} = this.state;
        return (
                <Grid className="action-panel">
                    <Cell col={12} className="action-panel-navbar">
                        <Button name="action-button" id="1" onClick={this.toggleTool}>General</Button>
                        <Button name="action-button" id="2" onClick={this.toggleTool}>Manage Consorces</Button>
                        <Button name="action-button" id="3" onClick={this.toggleTool}>3</Button>
                        <Button name="action-button" id="4" onClick={this.toggleTool}>4</Button>
                    </Cell>
                    <Cell col={12} className="action-panel-view">
                        {openedTool === "1" && <GeneralView/>}
                        {openedTool === "2" && <ManageConsorces/>}
                        {"tool opened:" + openedTool}
                    </Cell>
                </Grid>
        )
    }
}

