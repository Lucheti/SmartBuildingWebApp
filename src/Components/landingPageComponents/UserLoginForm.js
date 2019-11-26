import React, {useRef} from 'react';
import {RegisterContext} from "../../Pages/landingPage";

export const useInput = () => {
    const ref = useRef();
    const refValue = () => {
        return ref.current.value
    };
    return [ref , refValue]
}

export default function userLoginForm(){

    const [usernameRef, username] = useInput();
    const [passwordRef, password] = useInput();
    const register = React.useContext(RegisterContext);
    const [error, setError] = React.useState(false)

    const handleLogin = e => {
        e.preventDefault();
        fetch("http://localhost:8080/admins/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": username(),
                "password": password(),
            })
        })
          .then(res => {
            if (res.ok)
              return res.json()
            if (res.status !== 200)
              setError(true)
          })
          .then(user => {
            if (user && user.id) {
              window.sessionStorage.setItem('token', "WASERDC-EDFVLPP-98UGVCD-PX9RFW8-PVCBPO");
              window.sessionStorage.setItem("id", user.id);
              window.sessionStorage.setItem("role", user.role);
              window.open("/home", "_self")
            }
            })
    };


    return (
        <div className="login">
            <h2>Sign In</h2>
            {error &&
            <div className={'error'}>
              <p>Username or password are incorrect</p>
            </div>
            }
            <form>
                <div className="input-group">
                    <input ref={usernameRef} type="text" name="" required="required" />
                    <span>Username</span>
                </div>
                <div className="input-group">
                    <input ref={passwordRef} type="password" name="" required="required"/>
                    <span>Password</span>
                </div>
                <div className="input-group">
                    <input type="submit" value="Login" onClick={handleLogin}/>
                </div>
            </form>
            <a href="#">Have no account? <span onClick={register}>Click Here</span></a>
            <a href="#">Forgot Password? <span>Click Here</span></a>
        </div>
    )


}
