import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import CourseFilter from "./components/CourseFilter";
import {filterData , apiUrl} from './data';
import { useEffect,useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader";
import  "./index.css"



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
    <div className=" flex flex-col">
      <div>   <Navbar />   </div>
      <div className="bg-bgDark2 min-h-screen">   
      <CourseFilter courseData ={filterData} />  
      <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
        {
          loading ? (<Loader/>) : (<CardsContainer courses={courses}/>)
        }
      </div>
       </div>
      
      
    </div>
  );
}

export default App;
