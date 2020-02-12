import React from 'react'
import { BASE_URL } from '../../../../Pages/Main'
import { HIDE_MODAL } from '../../reducers/RenderReducer'
import { RenderContext } from '../../../../App'

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
        <form className="consorce-form inputs" style={{width: 'unset'}}>
            <h4>Alert</h4>
            <div className={'input-group'} >
                <p>{'Category'}</p>
                <input value={category} type="text" placeholder="Choose Category"  required="required" onChange={ (evt) => {setCategory(evt.target.value)}} list="browsers"/>
            </div>
            <datalist id="browsers">
                {loaded && categorys && categorys.length > 0 && categorys.map( category => <option value={category.name}/>)}
            </datalist>
            <div className={'input-group'} >
                <p>{'Description'}</p>
                <input value={description} name="descripion" type="text" placeholder="Write here" required="required" onChange={(evt) => {setDescription(evt.target.value)}}/>
            </div>
            <input type="submit" value={"Add alert"} onClick={ addAlert }/>
        </form>
    )
}
