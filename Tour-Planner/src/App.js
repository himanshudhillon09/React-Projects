import React from "react";
import Card from "./components/Card";
import { useState } from "react";
import data from "./data";

const App = () => {
  const [tours, setTour] = useState(data);

  function RemoveTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTour(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="empty-tour-list">
        <h2>No tour left</h2>
        <button className="refresh" onClick={() => setTour(data)}>
          REFRESH
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div>
        <h2 className="title">TOUR PLANNER</h2>
      </div>

      <div className="card-container">
        {tours.map((tour) => {
          return <Card key={tour.id} tour={{ ...tour }} remove={RemoveTour} />;
        })}
      </div>
    </div>
  );
};

export default App;
