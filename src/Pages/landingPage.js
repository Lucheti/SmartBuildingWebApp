import React from 'react';
import AdminLoginForm from "../Components/landingPageComponents/AdminLoginForm";
import ConsortLoginForm from "../Components/landingPageComponents/ConsortLoginForm";
import Logo from "../Components/landingPageComponents/Logo";

export default function LandingPage(){

        return (
            <div className="landing-bg">
                <Logo/>
                <AdminLoginForm/>
                <ConsortLoginForm/>
            </div>
        );

}