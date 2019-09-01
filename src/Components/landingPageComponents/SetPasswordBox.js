import React, {Component} from 'react';

export default class SetPasswordBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            submited: false,
            user: props.user
        }
    }

    updateState = evt =>{
        this.setState({[evt.target.name]: evt.target.value})
    }

    setPassword = e => {
        e.preventDefault()
        this.updateUser()
        fetch("http://localhost:8080/users",{
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + window.sessionStorage.token
            },
            body: JSON.stringify({
                "id": this.state.user.id,
                "email": this.state.user.email,
                "password": this.state.user.password,
                "name": this.state.user.name,
                "role": this.state.user.role,

            })
        }).then(res => {
            if (res.ok){
                this.setState({submited: true})
            }
        })
    }

    updateUser = () => {
        const user = this.state.user;
        user.password = this.state.password;
        this.setState({user: user});
    }

    render() {
        const {user,submited} = this.state;
        return (
            <div className="black-screen">
                {!submited &&
                <div className="set-password">
                    <h1>Hi {user.name}..</h1>
                    <p>seems like you haven't set a password yet, <span>lets do it!</span></p>
                    <form>
                        <div className="input-group">
                            <input placeholder="Enter password here" name="password" type="password" value={this.state.password} onChange={this.updateState}/>
                        </div>
                        <input type="submit" onClick={this.setPassword}/>
                    </form>
                </div>}
                {submited &&
                <div className="set-password">
                    <span id="close-button" onClick={this.props.toggle}><i className="fa fa-times"/></span>
                    <h1 id="thank-you">Thank you!</h1>
                    <h3>you are now ready to login</h3>
                </div>}
            </div>
        )
    }
}