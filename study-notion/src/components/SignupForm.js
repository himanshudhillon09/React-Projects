import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignupForm({setIsLoggedIn}) {
  
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Create Successfull");
    
    navigate("/dashboard");
    console.log(formData);
  
  };

  return (
    <div className="mt-8">
      <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
        <button
          name="accountType"
          value="student"
          onClick={(event) => {
            setFormData((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }));
          }}
          className={`${
            formData.accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          name="accountType"
          value="instructor"
          onClick={(event) => {
            setFormData((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }));
          }}
          className={`${
            formData.accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              First Name <sup>*</sup>
            </p>
            <input
              required
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={formData.firstname}
              onChange={changeHandler}
            />
          </label>
          <label className="w-full">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Last Name <sup>*</sup>
            </p>
            <input
              required
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={formData.lastname}
              onChange={changeHandler}
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Email <sup>*</sup>
          </p>
          <input
            required
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Password <sup className="text-pink-200">*</sup>{" "}
            </p>

            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPass === false ? "password" : "text"}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />

            <span
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-[38px] right-3 z-10 cursor-pointer"
            >
              {showPass === false ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showConfirmPass === false ? "password" : "text"}
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
            />
            <span
              onClick={() => setShowConfirmPass((prev) => !prev)}
              className="absolute top-[38px] right-1.5 z-10 cursor-pointer"
            >
              {showConfirmPass === false ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
