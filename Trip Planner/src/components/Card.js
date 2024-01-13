import { useState } from "react";

function Card( id, name, info, image, price) {
  const [readmore, setReadMore] = useState(false);
  var description = `${info.substring(0,200)}....`;

  const readMoreHandler = (id) => {
    setReadMore(!readmore);
    if(true){
        description = info;
    }
  };

  function removeTourHandler(id){
   const newTours = tours.filter(tour => tour.id!=id);
  }

  return (
    <div className="card">
      <div className="place-img-container">
        <img src={image}  alt="img"/>
      </div>
      <div className="tour-details">
        <div className="trip-price">₹ {price}</div>
        <div className="tour-place-name">
          <h4>{name}</h4>
        </div>
        <div className="tour-place-desc">{description}</div>
        <span className="read-more" onClick={readMoreHandler}>
          {readmore ? "show less" : "show more"}
        </span>
      </div>
      <div className="interest-button" onClick={removeTourHandler}>Not Insterested</div>
    </div>
  );
}

export default Card;
