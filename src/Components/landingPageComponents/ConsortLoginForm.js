import React,{Component} from 'react';

export default class consortLoginForm extends Component{

    alert = e => {
        e.preventDefault();
        alert("asdfasdfasdf")
    }

    handleLogin = e =>{
        window.sessionStorage.setItem('token',12312);
        window.sessionStorage.setItem('id',1);
        window.sessionStorage.setItem('role',"consort")
        window.open("/consortHome", "_self")

    }


    render() {


        return (
            <div className="container">
                {/*<h3>CONSORT SIGN IN</h3>*/}
                <div className="search"><input type="text" placeholder="Consort code..."/>
                    <div className="icon" onClick={this.handleLogin}/>
                </div>
            </div>
        )
    }
}