import React, {Component} from 'react';
import { BASE_URL } from '../../Pages/Main'

export default class SetPasswordBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            submited: false,
            user: props.user,
            dni: '',
            phone: '',
            age: ''
        }
    }

    updateState = evt =>{
        this.setState({[evt.target.name]: evt.target.value})
    }

    setPassword = e => {
        e.preventDefault()
        this.updateUser()
        fetch(BASE_URL + "/users",{
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": this.state.user.id,
                "email": this.state.user.email,
                "password": this.state.user.password,
                "name": this.state.user.name,
                "role": this.state.user.role,
                "dni": this.state.dni,
                "age": this.state.age,
                "phone": this.state.phone

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
                    <p>Seems like you haven't set a password yet, <span>lets do it!</span></p>
                    <div style={{width: 'fit-content', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <input placeholder="Enter password here" name="password" type="password" value={this.state.password} onChange={this.updateState}/>
                            <input placeholder="Enter age here" name="age"  value={this.state.age} onChange={this.updateState}/>
                            <input placeholder="Enter dni here" name="dni"  value={this.state.dni} onChange={this.updateState}/>
                            <input placeholder="Enter phone here" name="phone"  value={this.state.phone} onChange={this.updateState}/>
                        <input type="submit" onClick={this.setPassword}/>
                    </div>
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
