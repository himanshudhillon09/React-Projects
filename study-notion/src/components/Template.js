import React from "react";
import Signup from "./Signup";
import frame from "../asssets/frame.png";

const Template = ({ title, desc1, desc2, image, formType, setIsloggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title} </h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? <Signup /> : <Login />}
        E2R435T678909875643W2
        <div>
          <div></div>
          <p>OR</p>
          <div></div>

          <button>Sign Up with Google</button>
        </div>
      </div>
      <div>
        <img src={frame} alt="pattern-image" />
        <img src={image} alt="student-image" />
      </div>
    </div>
  );
};

export default Template;
