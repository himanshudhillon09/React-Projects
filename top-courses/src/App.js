import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import CourseFilter from "./components/CourseFilter";
import {filterData , apiUrl} from './data';
import { useEffect,useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader";



function App() {
const[courses,setCourses] = useState([]);
const[loading,setLoading] = useState(true);

 async function fetchData()
{
  setLoading(true);
  try{
    let response = await fetch(apiUrl);
    let output = await response.json();
    setCourses(output.data);
  }

  catch(error){
    toast.error("Problem while fetching the data");
  }

  setLoading(false);
}


  useEffect(()=> {
    fetchData(); 
  },[])

  return (
    <div className="wrapper">
      <div className="">   <Navbar />   </div>
      <div className="">   <CourseFilter courseData ={filterData} />   </div>
      <div>
        {
          loading ? (<Loader/>) : (<CardsContainer courses={courses}/>)
        }
      </div>
      
    </div>
  );
}

export default App;
