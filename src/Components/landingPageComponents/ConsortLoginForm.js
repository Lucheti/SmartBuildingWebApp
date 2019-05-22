import React,{Component} from 'react';

export default class consortLoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            consortCode: ""
        }
    }

    alert = e => {
        e.preventDefault();
        alert("asdfasdfasdf")
    }

    updateConsortCode = evt =>{
        evt.preventDefault();
        this.setState({consortCode: evt.target.value})
    }

    handleLogin = e =>{
        e.preventDefault();
        fetch('http://localhost:8080/oauth/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa('my-trusted-client:secret'),

            }
        }).then((res) => {
            console.log(res)
            if (res.ok) {
                res.json().then(json => {
                    window.sessionStorage.setItem('token', json.access_token);
                    window.sessionStorage.setItem('role', "consort");
                    fetch("http://localhost:8080/apartments/" + this.state.consortCode,{
                        method: 'GET',
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data)
                            window.sessionStorage.setItem("id",data.id)
                            window.open("/consortHome", "_self")
                        })
                        .catch( e => alert("No apartment found for the given code"))
                })
            }
        })
    };


    render() {
        return (
            <div className="container">
                {/*<h3>CONSORT SIGN IN</h3>*/}
                <div className="search">
                    <input type="text" placeholder="Consort code..." onChange={this.updateConsortCode}/>
                    <div className="icon" onClick={this.handleLogin}/>
                </div>
            </div>
        )
    }
}