import React from 'react'
import { BASE_URL } from '../../../../Pages/Main'
import { RenderContext } from '../../../../Pages/homePageAdmin'
import { HIDE_MODAL } from '../../reducers/RenderReducer'

export default function AlertConsorceForm({consorce ,update}) {
    const [category, setCategory] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [categorys, setCategorys] = React.useState({});
    const [loaded, setLoaded] = React.useState(false);

    const {dispatch: modalDispatch} = React.useContext(RenderContext)

    React.useEffect(() => {
        getCategorys();
    },[]);

    function emptyFields(){
        setCategory("");
        setDescription("");
    }

    function addAlert(evt) {
        evt.preventDefault();
        fetch(BASE_URL + "/alerts",{
            method: 'POST',
            headers: {
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
                modalDispatch({type: HIDE_MODAL})
                update();
            }
        })
    }

    function getCategorys(){
        if (!loaded) {
            fetch(BASE_URL + "/categorys", {
                method: 'GET',
                headers: {
                }
            }).then(res => res.json())
                .then(data => {
                    setCategorys(data)
                    setLoaded(true)
                })
        }
    }


    return(
        <form className="consorce-form">
            <h4>Alert</h4>
            <input value={category} type="text" placeholder="Choose Category"  required="required" onChange={ (evt) => {setCategory(evt.target.value)}} list="browsers"/>
            <datalist id="browsers">
                {loaded && categorys && categorys.length > 0 && categorys.map( category => <option value={category.name}/>)}
            </datalist>
            <input value={description} name="descripion" type="text" placeholder="Write here" required="required" onChange={(evt) => {setDescription(evt.target.value)}}/>
            <input type="submit" value={"Add alert"} onClick={ addAlert }/>
        </form>
    )
}
