import React, {Component} from 'react';
import {Button, Cell, Grid} from "react-mdl";
import {ManageConsorces} from "./ManageConsorces";

export default class ActionPanel extends Component {

    constructor(props){
        super(props)
        this.state = {
            buttons: true,
            tools: {
                tool1: false,
                tool2: false,
                tool3: false,
                tool4: false
            }
        }
    }
//75vh 200%
    activate = e =>{
        this.toggleAllButtons()
        this.toggleTool("tool" + e.target.id)

    }
    toggleAllButtons = () => {
        this.setState(prevState =>({buttons: !prevState.buttons}));
    }

    toggleTool = toolId =>{
        this.setState({tools: {
                tool1: "tool1" === toolId,
                tool2: "tool2" === toolId,
                tool3: "tool3" === toolId,
                tool4: "tool4" === toolId
            }});
    }

    render() {
            const {buttons, tools} = this.state;
            const {tool1,tool2,tool3,tool4} = tools;
        return (
            <div className="action-panel">
                <Grid className="no-padding">
                    {buttons && <Cell col={6}>
                        <Button name="action-button" id="1" onClick={this.activate}>manage consorces</Button>
                        <Button name="action-button" id="2" onClick={this.activate}>2</Button>
                    </Cell>}
                    {buttons && <Cell col={6}>
                        <Button name="action-button" id="3" onClick={this.activate}>3</Button>
                        <Button name="action-button" id="4" onClick={this.activate}>4</Button>
                    </Cell>}
                    {!buttons && <Cell col={12} className=" full-width">
                        {tool1 && <ManageConsorces/>}

                    </Cell>}
                </Grid>
             </div>
        )
    }
}

