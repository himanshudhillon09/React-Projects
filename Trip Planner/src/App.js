import React from "react";
import Card from "./components/Card";
import { useState } from "react";
import data from "./data";






const App = () => {



  const [tours,setTour] = useState(data);

  function removeTourHandler(id){
    const newTours = tours.filter(tour => tour.id!==id);
    setTour(newTours);
   }

  return (
    <div className="container">
    <div className="title"><h2>Trip Planner</h2></div>
    
    <div className="card-container">
      {
        tours.map((tour)=>{
          return <Card {...tours} removeTour={removeTourHandler} />
        })
      }
    </div>
       
     
      
   
  </div>
  );
  
  
};

export default App;
