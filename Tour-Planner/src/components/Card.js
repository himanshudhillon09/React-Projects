import { useState } from "react";

function Card({ tour, remove }) {
  const [readmore, setReadMore] = useState(false);
  const description =
    readmore === false ? `${tour.info.substring(0, 200)}....` : tour.info;

  const readMoreHandler = () => {
    setReadMore(!readmore);
  };

  return (
    <div className="cards">
      <div className="place-img-container">
        <img className="image" src={tour.image} alt="img" />
      </div>
      <div className="tour-details">
        <div className="tour-price">₹ {tour.price}</div>
        <div className="tour-place-name">
          <h4>{tour.name}</h4>
        </div>
        <div className="tour-place-desc">
          {description}
          <span className="read-more" onClick={readMoreHandler}>
            {readmore ? "show less" : "show more"}
          </span>
        </div>
      </div>
      <button className="interest-button" onClick={() => remove(tour.id)}>
        Not Insterested
      </button>
    </div>
  );
}

export default Card;
