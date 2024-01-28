import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frame from "../asssets/frame.png";

const Template = ({ title, desc1, desc2, imageSource, formType, setIsloggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title} </h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm /> : <LoginForm />}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div>
        <img src={frame} alt="pattern" />
        <img src={imageSource} alt="student" />
      </div>
    </div>
  );
};

export default Template;
