import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from "react-hot-toast";

function LoginForm({setIsLoggedIn}){
   const navigate = useNavigate();
    const [showPass,setShowPass]= useState(false);
    const [formData,setFormData] = useState ({email : '' , password: ''});

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev , [event.target.name] : event.target.value
        }) )
    }

    function submithandler(e){
        e.preventDefault();
        toast.success("Logged In Successfully");
        setIsLoggedIn(true);
        navigate("/dashboard");
    }
    
    return(
        <form onSubmit={submithandler} className="flex flex-col w-full gap-y-4 mt-6">
          <label className="w-full" >
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"> Email Address <sup className="text-pink-200">*</sup></p>
            <input required type="email" placeholder="Enter email address" name="email" value={formData.username} onChange={changeHandler} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />
            </label>  
            
          <label className="w-full relative">
           <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup> </p>  
              
            <input required type={showPass===false ? "password":"text"} placeholder="Enter password" name="password" value={formData.password} onChange={changeHandler} className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"/> 
            <span onClick={() => setShowPass((prev)=> !prev)} className="absolute right-3 top-[38px] cursor-pointer ">{showPass===false ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/> )}</span>
            <Link to='#'><p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot password ?</p></Link>
            
            </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900">Login</button>

        </form>
    )
}



export default LoginForm;