import React,{Component} from 'react';
import SetPasswordBox from "./SetPasswordBox";
import { BASE_URL } from '../../Pages/Main'

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
        fetch(BASE_URL + "/apartments/" + this.state.consortCode, {
            method: 'GET',
            headers: {
            }
        }).then(res => res.json())
            .then(apartment => {
                window.sessionStorage.setItem('token', "P098UHN-6YGFR34-8UYTRF-765ES2");
                if (apartment.owner.password === null) {
                    this.setState({
                        setPassword: true,
                        consortCode: "",
                        user: apartment.owner
                    })
                }else alert("code already used")
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
