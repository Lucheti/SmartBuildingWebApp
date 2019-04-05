import React, {Component} from 'react';

export default class consortLoginForm extends Component {

    render() {

        return (
            <form className="form" id="consortLoginForm">

                <h2>Consort Login</h2>

                <div className="inputBox">
                    <input type="text" name="consortLoginUsername" required="required"
                           placeholder="Username"/>
                </div>

                <div className="inputBox">
                    <input type="password" name="consortLoginPassword" required="required"
                           placeholder="Password"/>
                </div>

                <input type="submit" name="submit" value="Log In"/>
            </form>
        )
    }
}