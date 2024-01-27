import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home"; 
import Dashboard from "./components/Dashboard";
import "./App.css" ;

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);



  return (
    <div className="">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

      
      </div>
      
  );
}

export default App;
