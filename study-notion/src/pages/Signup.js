import React from "react";
import signupImg from '../asssets/signup.png';
import Template from "../components/Template";


function Signup({setIsloggedIn}){
    return(
        <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today,tomorrow and beyond."
    desc2="Education to future-proof your career."
    imageSource={signupImg}
    formType="signup"
    setIsloggedIn={setIsloggedIn}
    />
    )
}

export default Signup;