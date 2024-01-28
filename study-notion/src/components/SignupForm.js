import {React,useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';



function SignupForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword:''
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form>
        <div>
        <label>
          <p>
            First Name <sup>*</sup>
          </p>
          <input
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={formData.firstname}
            onChange={changeHandler}
          />
        </label>
        <label>
          <p>
            Last Name <sup>*</sup>
          </p>
          <input
            type="text"
            name="lastname"
            placeholder="Enter last name"
            value={formData.lastname}
            onChange={changeHandler}
          />
        </label>
        </div>

        <label>
          <p>
            Email <sup>*</sup>
          </p>
          <input
            type="text"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
          />
        </label>


        <div>
        <label>
          <p>
            Password <sup>*</sup>{" "}
          </p>

          <input
            required
            type={showPass === false ? "password" : "text"}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
          />
            <span onClick={() => setShowPass((prev) => !prev)}>
              {showPass === false ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          
        </label>
        <label>
          <p>
            Confirm Password <sup>*</sup>{" "}
          </p>

          <input
            required
            type={showPass === false ? "password" : "text"}
            placeholder="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
         />
            <span onClick={() => setShowConfirmPass((prev) => !prev)}>
              {showConfirmPass === false ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          
        </label>

        <button>Create Account</button>
        </div>

      </form>
    </div>
  );
}

export default SignupForm;
