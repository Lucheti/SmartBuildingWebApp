import React from 'react';
import {useSpring, animated, interpolate} from "react-spring";
import { Spring } from 'react-spring/renderprops'

export default function Arrow() {

    return (

        <div>
            <div className="container centeredContainer">
                <a data-scroll >
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        config={{duration: 2000 }}>
                        {props => <div style={props} className="arrow"></div>}
                    </Spring>
                </a>
            </div>
        </div>

    )

}