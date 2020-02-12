import React from 'react';
import ConsortLoginForm from "../Components/landingPageComponents/ConsortRegisterForm";
import Logo from "../Components/landingPageComponents/Logo";
import RegisterForm from "../Components/landingPageComponents/registerForm";
import UserLoginForm from "../Components/landingPageComponents/UserLoginForm";

const useBoolean = (initialState) => {
    const [bool, setBool] = React.useState(initialState);
    const toggle = () => setBool(!bool);
    return [bool, toggle]
};

export const RegisterContext = React.createContext()

export default function LandingPage() {

    const [register, setRegister] = useBoolean(false);

    return (
        <RegisterContext.Provider value={setRegister}>
            <div className="landing-bg">
                <Logo/>
                {register ?
                    <RegisterForm setRegister={setRegister}/>
                    :
                    <UserLoginForm/>
                }
                {/*<ConsortLoginForm/>*/}
            </div>
        </RegisterContext.Provider>
    );

}
