import React from 'react';
import { BASE_URL } from '../../../../Pages/Main'
import { useInput } from '../../../landingPageComponents/UserLoginForm'
import { HIDE_MODAL, showAlert } from '../../reducers/RenderReducer'
import '../../../../App.css'
import { Input } from '../../../utils/Input'
import { mailValidator, textValidator } from '../../../utils/Validators'
import { RenderContext } from '../../../../App'

export const AddApartmentForm = ({id , updateApartmentList}) => {

    const [ownerRef, ownerVal] = useInput()
    const [emailRef, emailVal] = useInput()
    const [apartmentCodeRef, apartmentCodeVal] = useInput()
    const {dispatch: modalDispatch} = React.useContext(RenderContext)


    const addApartment = evt => {
        evt.preventDefault();
        if (inputsAreValid()) {
            fetch(BASE_URL + "/admins/consorce/" + id + "/apartment", {
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
                    "apartmentCode": apartmentCodeVal()
                })
            }).then(() => {
                updateApartmentList();
                resetFields()
                modalDispatch({ type: HIDE_MODAL })
            })
        }else{
            modalDispatch(showAlert('invalid inputs'))
        }

    }

    const resetFields = () => {
        ownerRef.current.value = ''
        emailRef.current.value = ''
        apartmentCodeRef.current.value = ''
    }

    const inputsAreValid = () => textValidator(ownerVal()) && textValidator(apartmentCodeVal()) && mailValidator(emailVal())


    return (
            <div className="inputs" style={{width: 'unset'}}>
                <h4 style={{textAlign: 'center', margin: 0}}>New Apartment</h4>
                <div style={{padding: '1rem 0'}}>
                    <Input label={'Owner'} placeholder={'Owner'} ref={ownerRef} validator={ textValidator }/>
                    <Input label={'Apartment Code'} placeholder={'ApartmentCode'} ref={apartmentCodeRef} validator={ textValidator }/>
                    <Input label={'Email'} placeholder={'Email'} ref={emailRef} validator={ mailValidator }/>
                </div>

                <div className={'submit-button'} style={{padding: '1rem'}}>
                    <button onClick={ addApartment } style={{background: 'black',color: 'white', padding: '.5rem' , fontSize: '1rem', cursor: 'pointer', border: 'none', textShadow: '0 0 5px rgba(255,255,255,.5)'}}>Add apartment</button>
                </div>
            </div>
    )

}

