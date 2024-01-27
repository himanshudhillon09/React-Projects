import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../asssets/Logo.svg";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="">
      <Link to="/">
        <img src={logo} alt="logo" className="" />
      </Link>
      <nav className="">
        <ul className=" ">
          <li>{<Link to="/">Home</Link>}</li>
          <li>{<Link to="/">About</Link>}</li>
          <li>{<Link to="/">Contact</Link>}</li>
        </ul>
      </nav>

      <div className="">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
