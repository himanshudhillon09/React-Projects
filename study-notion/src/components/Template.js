import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frame from "../asssets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, imageSource, formType, setIsloggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between text-richblack-100 bg-richblack-900">
      <div className="w-11/12 max-w-[450px] flex flex-col">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title} </h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-100">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsloggedIn} /> : <LoginForm setIsLoggedIn={setIsloggedIn} />}

        <div className="flex w-full items-center gap-x-2 my-4">
          <div className="h-[1px] bg-richblack-700 w-full"></div>
          <p className=" text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] bg-richblack-700 w-full"></div>
        </div>
        <button className="flex rounded-md items-center justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img src={frame}alt="patter" width={558} height={504} loading="lazy" />
        <img src={imageSource} alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 " />
      </div>
    </div>
  );
};

export default Template;
