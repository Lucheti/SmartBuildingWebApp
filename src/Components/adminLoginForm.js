import React from 'react';

export default function adminLoginForm(props){

        return (
            <form className="form" id="adminLoginForm" action="#">
                <h2>Admin Login</h2>
                <div className="inputBox">
                    <input type="text" name="adminLoginUsername" required="required"
                           placeholder="Username" value={props.userValue} onChange={props.onUpdate}/>
                </div>

                <div className="inputBox">
                    <input type="password" name="adminLoginPassword" required="required"
                           placeholder="Password" value={props.passValue} onChange={props.onUpdate}/>
                </div>

                <input type="submit" name="submit" value="Log In" onClick={props.handleLogin}/>
            </form>
        )

}