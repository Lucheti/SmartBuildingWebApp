import React from 'react';
import { BASE_URL } from '../../../../Pages/Main'
import { useInput } from '../../../landingPageComponents/UserLoginForm'
import { ModalContext } from '../../../../Pages/homePageAdmin'
import { HIDE_MODAL } from '../../reducers/ModalReducer'
import '../../../../App.css'

export const AddApartmentForm = ({id , updateApartmentList}) => {

    const [ownerRef, ownerVal] = useInput()
    const [emailRef, emailVal] = useInput()
    const [apartmentCodeRef, apartmentCodeVal] = useInput()
    const [pending, setPending] = React.useState()
    const modalDispatch = React.useContext(ModalContext)


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
            <form className="consorce-form">
                {pending && <h4 style={{color: "red"}}>Sending Email</h4>}
                <h4>New Apart</h4>
                <input ref={ownerRef} type="text" placeholder="Owner" required="required"/>
                <input ref={apartmentCodeRef} type="text" placeholder="ApartmentCode" required="required"/>
                <input ref={emailRef} type="text" placeholder="Email" required="required"/>
                <input type="submit" value={"Add apartment"} onClick={  addApartment }/>
            </form>
    )

}
