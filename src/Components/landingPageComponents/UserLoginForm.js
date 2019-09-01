import React, {useRef} from 'react';
import {RegisterContext} from "../../Pages/landingPage";

const useInput = () => {
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

    const handleLogin = e => {
        e.preventDefault();
        fetch('http://192.168.0.185:8080/oauth/token?grant_type=password&username=' + username() + '&password=' + password(), {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('my-trusted-client:secret'),
            }
        })
            .then(res => res.json())
            .then(json => {
                fetch("http://192.168.0.185:8080/admins/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + json.access_token
                    },
                    body: JSON.stringify({
                        "email": username(),
                        "password": password(),
                    })
                }).then(res => res.json())

                    .then(user => {
                        window.sessionStorage.setItem('token', json.access_token);
                        window.sessionStorage.setItem("id", user.id);
                        window.sessionStorage.setItem("role", user.role);
                        window.open("/home", "_self")
                    })
            })
    };


    return (
        <div className="login">
            <h2>Sign In</h2>
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
