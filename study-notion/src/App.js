import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router";
import { useState } from "react";




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
