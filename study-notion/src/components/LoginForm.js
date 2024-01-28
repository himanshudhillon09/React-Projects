import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';


function LoginForm(){
   
    const [showPass,setShowPass]= useState(false);
    const [formData,setFormData] = useState ({email : '' , password: ''});

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev , [event.target.name] : event.target.value
        }) )
    }


    
    return(
        <form>
          <label>
            <p> Email Address <sup>*</sup></p>
            <input required type="text" placeholder="Enter email address" name="email" value={formData.username} onChange={changeHandler} />
            </label>  
            
          <label>
           <p>Password <sup>*</sup> </p>  
              
            <input required type={showPass===false ? "password":"text"} placeholder="Enter password" name="password" value={formData.password} onChange={changeHandler} /> 
            <span onClick={() => setShowPass((prev)=> !prev)} >{showPass===false ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
            <Link to='#'><p>Forgot password ?</p></Link>
            
            </label>


        </form>
    )
}



export default LoginForm;