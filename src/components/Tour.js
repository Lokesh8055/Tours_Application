import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price, removeTour } = props;

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-info">
        <h4>{name}</h4>
        <button className="tour-price">{price}</button>
      </div>
      <footer>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
