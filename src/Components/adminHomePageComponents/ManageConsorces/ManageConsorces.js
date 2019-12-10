import React, {Component} from "react";
import AddConsorceForm from "./addConsorceForm";
import Consorce from "./Consorce";
import { BASE_URL } from '../../../Pages/Main'
export const UpdateConsorcesList = React.createContext();


export const ManageConsorces = () => {

    const [consorces, setConsorces] = React.useState([])

    React.useEffect(() => updateConsorcesList(),[])

    const updateConsorcesList = () => {
        fetch(BASE_URL + "/admins/"+ window.sessionStorage.id +"/consorce", {
            method: 'GET',
            headers: {
            }
        }).then(res => res.json())
            .then(data => setConsorces(data))
    }

    return (
        <UpdateConsorcesList.Provider value={ updateConsorcesList }>
            <div className="">
                <div className="consorces-wrapper">
                    {consorces.map( (item, i) => <Consorce key={i} consorce={item} i={i}/>)}
                    <AddConsorceForm/>
                </div>
            </div>
        </UpdateConsorcesList.Provider>

    )

}
