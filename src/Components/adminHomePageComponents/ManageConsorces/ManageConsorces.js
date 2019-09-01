import React, {Component} from "react";
import AddConsorceButton from "./addConsorceButton";
import Consorce from "./Consorce";
export const UpdateConsorcesList = React.createContext();


export class ManageConsorces extends Component {

    constructor(props){
        super(props);
        this.state = {
            consorces: []
        }
    }

    componentWillMount() {
        this.updateConsorcesList()
    }

    updateConsorcesList = () => {
        fetch("http://192.168.0.185:8080/admins/"+ window.sessionStorage.id +"/consorce", {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => res.json())
            .then(data => this.setState({consorces: data}))
    }

    render() {

        var {consorces} = this.state;

        return (
            <UpdateConsorcesList.Provider value={this.updateConsorcesList}>
                <div className="">
                    <div className="consorces-wrapper">
                        {consorces.map( (item, i) => <Consorce consorce={item} i={i}/>)}
                        <AddConsorceButton/>
                    </div>
                </div>
            </UpdateConsorcesList.Provider>

        )
    }

}
