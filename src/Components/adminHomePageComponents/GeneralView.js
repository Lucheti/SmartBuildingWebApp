import React, {Component} from 'react';
import Chart from "../../Test/Chart";

const getAdminInfo = () => {
    return fetch("http://localhost:8080/admins/" + window.sessionStorage.id, {
        method: 'GET',
        headers: {
        }
    })
}


export const GeneralView = () => {

    const [admin, setAdmin] = React.useState('')

    React.useEffect(() => {
        getAdminInfo()
          .then(res => res.json())
          .then(data => setAdmin(data.name))
    },[])

    return (
        <h1>
            {"Hello " + admin + ","}
            <Chart/>
        </h1>
    )

}
