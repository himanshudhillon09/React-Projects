import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router";





function App() {
  return (
    <div className="">
      <Navbar/>

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
