import React, {Component} from 'react';
import { BASE_URL } from '../../Pages/Main'
import { RenderContext } from '../../App'
import { updateNotifications } from '../adminHomePageComponents/reducers/RenderReducer'

export const ReportProblem = () => {

    const {dispatch} = React.useContext(RenderContext)

    const [state, setState] = React.useState({
        description: "",
        category: "",
        categorys: [],
        image: ""
    })

    React.useEffect(() => getCategorys(), [])

    const updateFields = evt => {
        evt.preventDefault();
        setState({...state ,[evt.target.name]: evt.target.value})
    }

    const emptyFields = () => {
        setState({
            description: "",
            category: ""
        })
    }

    const notifyProblem = evt =>{
        evt.preventDefault();
        fetch(BASE_URL + '/notifications', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: state.description,
                category: {
                    name: state.category
                },
                user: {
                    id: window.sessionStorage.id
                },
                image: state.image
            })


        })
            .then(res => {
                if (res.ok) {
                    updateNotificationsList()
                    emptyFields();
                }
            } )
    }

    const updateNotificationsList = () => fetch('http://localhost:8080/notifications/' + window.sessionStorage.id + '/' + window.sessionStorage.role)
      .then(res => res.json())
      .then(data => { dispatch(updateNotifications(data)) })


    const getCategorys = () => {
        fetch(BASE_URL + "/categorys",{
            method: 'GET',
            headers: {
            }
        }).then(res => res.json())
            .then(data => {
                setState({categorys: data})})
        }


    const onChange = e =>{
        let files = e.target.files
        const reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = e => setState({...state, image: e.target.result})
        e.target.value = ''
    }


        const {category , description} = state;
        return (
            <div className="report-problem" style={{}}>
                <h1 id={"report-problemh1"}>Have a Problem?</h1>
                <h4 id="report-problemh4">Let your admin know!</h4>
                <hr/>
            <form>
                <div className={'input-group'} style={{display: 'flex'}}>
                    <p style={{margin: 0,display: "flex", flexDirection: 'column' ,justifyContent: 'center', marginRight: '1rem', fontSize: '20px'}}>Category:</p>
                    <input value={category} type="text" placeholder="Category" name="category" onChange={updateFields} list="categorys" autoComplete="off" style={{height: 'auto'}}/>
                </div>
                <div className={'input-group'} style={{display: 'flex'}}>
                    <p style={{margin: 0,display: "flex", flexDirection: 'column' ,justifyContent: 'center', marginRight: '1rem', fontSize: '20px'}}>Description:</p>
                    <input value={description} type="text" placeholder="Description" name="description" onChange={updateFields}/>
                </div>
                    <datalist id="categorys">
                        {state.categorys && state.categorys.length && state.categorys.map( category => <option value={category.name}/>)}
                    </datalist>
                <div className={'file-upload'} style={ state.image? {backgroundImage: 'url("'+ state.image +'")', width: '100%', height: '30vh'} : {width: '100%', height: '30vh'}}>
                    {! state.image &&
                    <label>
                        <i className={'fa fa-plus'}/>
                        Upload Img
                    </label>}
                    <input style={{width: '100%'}} type="file" required="required" onChange={ onChange }/>
                </div>
                <input type="submit" value="Send" onClick={ notifyProblem }/>
            </form>
            </div>
        )

}
export default ReportProblem