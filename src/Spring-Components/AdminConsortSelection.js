import React, {Component} from 'react';

export default class AdminConsortSelection extends Component{
    constructor(props){
        super(props)
        this.state = {
            adminOpen: true,
            consortOpen: true
        }

    }

    clickConsort = e =>{
        this.setState({
            adminOpen: false
         })
        this.props.onSelectEntity("consort")
    }


    clickAdmin = e =>{

        this.setState({
            consortOpen: false
        })
        this.props.onSelectEntity("admin")
    }

    render(){
        return(
            <div>
                <div className="centeredContainer">
                    <h1>as</h1>
                </div>
                <div className="centeredContainer">
                    {this.state.adminOpen && <h1 onClick={this.clickAdmin} className="pointer">Admin</h1>}
                    {(this.state.adminOpen && this.state.consortOpen) && <h1 className="optional"> -or- </h1>}
                    {this.state.consortOpen && <h1 onClick={this.clickConsort} className="pointer">Consort</h1>}
                </div>
            </div>
        )
    }

}