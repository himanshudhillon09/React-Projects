import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import CourseFilter from "./components/CourseFilter";
import './data';
import { apiUrl, filterData } from "./data";





function App() {

 


  return (
    <div className="wrapper">
      <Navbar />
      <CourseFilter>
        {filterData.map((data)=>{
          return(
            <button key={filterData.id}>{filterData.title}</button>
          );
        })}
      </CourseFilter>
    </div>
  );
}

export default App;
