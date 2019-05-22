import React,{Component} from 'react';

export default class adminLoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            usernameInputValue:"",
            passwordInputValue:""
        }
    }

    updateUsernameInputValue = (evt) => {
        this.setState({
            usernameInputValue: evt.target.value
        });
    }
    updatePasswordInputValue = (evt) =>{
        this.setState({
            passwordInputValue: evt.target.value
        });
    }
    handleLogin = e =>{
        e.preventDefault();
        fetch('http://localhost:8080/oauth/token?grant_type=password&username='+ this.state.usernameInputValue +'&password=' + this.state.passwordInputValue, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa('my-trusted-client:secret'),

            }
        })
            .then((res) => {
                console.log(res)
                if(res.ok) {
                    res.json().then(json => {
                        window.sessionStorage.setItem('token', json.access_token);
                        window.sessionStorage.setItem('role',"admin")

                        fetch("http://localhost:8080/admins/login",{
                            method: 'POST',
                            headers:{
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer " + window.sessionStorage.token
                            },
                            body: JSON.stringify({
                                "username": this.state.usernameInputValue,
                                "password": this.state.passwordInputValue
                            })
                        }).then(res =>{
                            console.log(res)
                            if(res.ok) res.json().then(json => {
                                window.sessionStorage.setItem("id",json.id)
                                window.open("/adminHome", "_self")
                            })
                        })
                    })}
                else console.log(res)
            }).catch(e => console.log(e))




    }

    render() {
        return (
            <div className="login">
                <h2>Sign In</h2>
                <form>
                    <div className="input-group">
                        <input type="text" name="" required="required" onChange={this.updateUsernameInputValue}/>
                        <span>Username</span>
                    </div>
                    <div className="input-group">
                        <input type="password" name="" required="required" onChange={this.updatePasswordInputValue}/>
                        <span>Password</span>
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Login" onClick={this.handleLogin}/>
                    </div>
                </form>
                <a href="#">Have no account? <span>Click Here</span></a>
                <a href="#">Forgot Password? <span>Click Here</span></a>
            </div>
        )
    }

}