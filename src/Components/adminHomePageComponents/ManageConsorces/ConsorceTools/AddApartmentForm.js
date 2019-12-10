import React from 'react';
import { BASE_URL } from '../../../../Pages/Main'
import { useInput } from '../../../landingPageComponents/UserLoginForm'
import { RenderContext } from '../../../../Pages/homePageAdmin'
import { HIDE_MODAL } from '../../reducers/RenderReducer'
import '../../../../App.css'
import { Input } from '../../../utils/Input'

export const AddApartmentForm = ({id , updateApartmentList}) => {

    const [ownerRef, ownerVal] = useInput()
    const [emailRef, emailVal] = useInput()
    const [apartmentCodeRef, apartmentCodeVal] = useInput()
    const [pending, setPending] = React.useState()
    const {dispatch: modalDispatch} = React.useContext(RenderContext)


    const addApartment = evt => {
        evt.preventDefault();
        setPending(true)
        fetch(BASE_URL + "/admins/consorce/" + id + "/apartment",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "owner": {
                    "email": emailVal(),
                    "name": ownerVal(),
                    "role": "consort"
                },
                "apartmentCode":apartmentCodeVal()
            })
        }).then(() => {
            updateApartmentList();
            resetFields()
            setPending(false)
            modalDispatch({type: HIDE_MODAL})
        })
    }

    const resetFields = () => {
        ownerRef.current.value = ''
        emailRef.current.value = ''
        apartmentCodeRef.current.value = ''
    }


    return (
            <div className="inputs" style={{width: 'unset'}}>
                {pending && <h4 style={{color: "red"}}>Sending Email</h4>}
                <h4 style={{textAlign: 'center', margin: 0}}>New Apartment</h4>
                <div style={{padding: '1rem 0'}}>
                    <Input label={'Owner'} placeholder={'Owner'} ref={ownerRef}/>
                    <Input label={'Apartment Code'} placeholder={'ApartmentCode'} ref={apartmentCodeRef}/>
                    <Input label={'Email'} placeholder={'Email'} ref={emailRef}/>
                </div>

                <div className={'submit-button'} style={{padding: '1rem'}}>
                    <button onClick={ addApartment } style={{background: 'black',color: 'white', padding: '.5rem' , fontSize: '1rem', cursor: 'pointer', border: 'none', textShadow: '0 0 5px rgba(255,255,255,.5)'}}>Add apartment</button>
                </div>
            </div>
    )

}

