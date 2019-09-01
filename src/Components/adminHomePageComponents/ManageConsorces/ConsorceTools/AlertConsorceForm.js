import React from 'react'

export default function AlertConsorceForm({consorce ,update}) {
    const [category, setCategory] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [categorys, setCategorys] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        getCategorys();
    },[]);

    function emptyFields(){
        setCategory("");
        setDescription("");
    }

    function addAlert(evt) {
        evt.preventDefault();
        fetch("http://localhost:8080/alerts",{
            method: 'POST',
            headers: {
                'Authorization': "Bearer " + window.sessionStorage.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: description,
                category: {
                    name: category
                },
                consorce: {
                    ...consorce
                }
            })
        }).then(res => {
            if (res.ok) {
                emptyFields();
                update();
            }
        })
    }

    function getCategorys(){
        if (!loaded) {
            fetch("http://localhost:8080/categorys", {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer " + window.sessionStorage.token
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCategorys(data)
                    setLoaded(true)
                })
        }
    }


    return(
        <form className="consorce-form">
            <h4>Alert</h4>
            <input value={category} type="text" placeholder="Click to choose"  required="required" onChange={ (evt) => {setCategory(evt.target.value)}} list="browsers"/>
            <datalist id="browsers">
                {loaded && categorys.map( category => <option value={category.name}/>)}
            </datalist>
            <input value={description} name="descripion" type="text" placeholder="Write here" required="required" onChange={(evt) => {setDescription(evt.target.value)}}/>
            <input type="submit" value={"Add alert"} onClick={addAlert}/>
        </form>
    )
}