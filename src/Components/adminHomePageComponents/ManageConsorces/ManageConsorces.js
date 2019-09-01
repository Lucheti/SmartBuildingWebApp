import React, {Component} from "react";
import AddConsorceButton from "./addConsorceButton";
import Consorce from "./Consorce";

export const UpdateConsorcesList = React.createContext();


export function ManageConsorces() {

    const [consorces, setConsorce] = React.useState([])

    React.useEffect(() => {
        updateConsorcesList()
    }, []);

    const updateConsorcesList = () => {
        fetch("http://localhost:8080/admins/" + window.sessionStorage.id + "/consorce", {
            method: 'GET',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token
            }
        }).then(res => res.json())
            .then(data => {
                setConsorce([])
                setConsorce(data)
            })
    };

    return (
        <UpdateConsorcesList.Provider value={updateConsorcesList}>
            <div className="">
                <div className="consorces-wrapper">
                    {consorces.map((item, i) => (<Consorce consorce={item} i={i}/>))}
                    <AddConsorceButton/>
                </div>
            </div>
        </UpdateConsorcesList.Provider>

    )

}
