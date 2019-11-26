import React, {useRef} from 'react';
import {UpdateConsorcesList} from './ManageConsorces'

const useInput = () => {
    const ref = useRef();
    const refValue = () => {
        return ref.current.value
    };
    return [ref , refValue]
}


export default function AddConsorceButton({consorcesList}){

    const updateList = React.useContext(UpdateConsorcesList);

    const [consorceNameRef, consorceName] = useInput();
    const [consorceAdressRef, consorceAdress] = useInput();
    const [consorceZipRef, consorceZip] = useInput();
    const [consorceNumberRef, consorceNumber] = useInput();


    const addConsorce = e => {
        e.preventDefault();
        fetch("http://localhost:8080/admins/"+window.sessionStorage.id+"/consorce",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": consorceName(),
            })
        })
            .then(res => {
                if (res.ok){
                    // consorceNameRef.clear();
                    updateList()
                }
            }
            )
    };


        return (
            <div className={'add-consorce'}>
                <form>
                    <div className={'file-upload'}>
                        <label>
                            <i className={'fa fa-plus'}/>
                            Upload Img
                            <input type="file" required="required"/>
                        </label>
                    </div>
                    <div className='inputs'>

                        <div className={'input-group'}>
                            <p>Name</p>
                            <input ref={consorceNameRef} placeholder={'Name'}/>
                        </div>

                        <div className={'input-group'}>
                            <p>Adress</p>
                            <input ref={consorceAdressRef} placeholder={'Adress'}/>
                        </div>

                        <div className={'input-group'}>
                            <p>Zip Code</p>
                            <input ref={consorceZipRef} placeholder={'Zip Code'}/>
                        </div>

                        <div className={'input-group'}>
                            <p>Contact Number</p>
                            <input ref={consorceNumberRef} placeholder={'Contact Number'}/>
                        </div>

                        <div className={'submit-button'}>
                            <input type="submit" value="Add Consorce" onClick={addConsorce} required="required"/>
                        </div>
                    </div>
                </form>

            </div>

        )
}
