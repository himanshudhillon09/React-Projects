import React from "react";
import Template from "../components/Template";
import loginImg from '../asssets/login.png';




function Login({setIsloggedIn }){
 return(
    <Template
    title="Welcome Back"
    desc1="Build skills for today,tomorrow and beyond."
    desc2="Education to future-proof your career."
    imageSource={loginImg}
    formType="login"
    setIsloggedIn={setIsloggedIn}
    />
 );
}

export default Login;