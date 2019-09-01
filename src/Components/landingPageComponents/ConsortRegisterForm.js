import React,{Component} from 'react';
import SetPasswordBox from "./SetPasswordBox";

export default class consortRegisterForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            consortCode: "",
            setPassword: false,
            user: []
        }
    }

    updateConsortCode = evt =>{
        this.setState({[evt.target.name]: evt.target.value})
    }

    toggleSetPassword = () => {
        this.setState(prev =>  { return {setPassword: !prev.setPassword}})
    }

    handleLogin = e => {
        e.preventDefault();
        fetch('http://localhost:8080/oauth/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('my-trusted-client:secret'),
            }
        }).then(res => res.json())
            .then(json => {
                fetch("http://localhost:8080/apartments/" + this.state.consortCode, {
                    method: 'GET',
                    headers: {
                        'Authorization': "Bearer " + json.access_token
                    }
                }).then(res => res.json())
                    .then(apartment => {
                        window.sessionStorage.setItem('token', json.access_token);
                        if (apartment.owner.password === null) {
                            this.setState({
                                setPassword: true,
                                consortCode: "",
                                user: apartment.owner
                            })
                        }else alert("code already used")
                    })
            }).catch(e => {
                console.log(e)
                alert("No apartment found for the given code")
        })
    }



    render() {
        const {consortCode,setPassword,user} = this.state;
        return (
            <div className="container">
                <div className="search">
                    <input value={consortCode} name="consortCode" type="text" placeholder="Consort code..." onChange={this.updateConsortCode}/>
                    <div className="icon" onClick={this.handleLogin}/>
                </div>
                {setPassword && <SetPasswordBox toggle={this.toggleSetPassword} user={user}/>}
            </div>
        )
    }
}