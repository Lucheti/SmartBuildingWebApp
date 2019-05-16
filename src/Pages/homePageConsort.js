import React, {Component} from 'react';
import {Spring, Transition} from "react-spring/renderprops";


class HomePageConsort extends Component{

    constructor(props){
        super(props);
        this.state = {
            getSarted: false
        }
    }

    toggle = e => {
        e.preventDefault()
        this.setState({
            getSarted: !this.state.getSarted
        })
    }

    render() {
            return(
                <div>
                    <Transition
                        from={{position: 'absolute', marginTop: -500 }}
                        enter={{ marginTop: 0}}
                        leave={{ opacity: 0}}
                    >
                    </Transition>
                </div>
                )
            }
}

export default HomePageConsort;