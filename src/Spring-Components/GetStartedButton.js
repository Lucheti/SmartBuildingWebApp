import React, {Component} from 'react';
import Arrow from "./Arrow";
import { Spring } from 'react-spring/renderprops'

export default function GetStartedButton(props){
        return (

            <div>
                <Arrow/>
                <Arrow/>
                <Arrow/>
                <div className="container centeredContainer pointer">
                    <Spring
                        from={{opacity: 0}}
                        to={{opacity: 1}}
                        config={{delay: 1000, duration: 1000}}
                    >
                        {fadeIn => <h1 style={fadeIn} onClick={props.toggle}>get started</h1>}
                    </Spring>

                </div>
            </div>
        )



}