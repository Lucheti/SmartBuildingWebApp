import React, {Component} from 'react';

export default class adminLoginForm extends Component {

    render() {

        return (
            <form className="form" id="adminLoginForm">
                <h2>Admin Login</h2>
                <div className="inputBox">
                    <input type="text" name="adminLoginUsername" required="required"
                           placeholder="Username"/>
                </div>

                <div className="inputBox">
                    <input type="password" name="adminLoginPassword" required="required"
                           placeholder="Password"/>
                </div>

                <input type="submit" name="submit" value="Log In"/>
            </form>
        )
    }
}