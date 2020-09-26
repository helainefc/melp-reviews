 
import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/restaurant-2.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
import Starts from "./Starts"

const Restaurant = memo(({ restaurant }) => {
  const { name, id, rating,address } = restaurant;
  
  return (
    <article className="restaurant">
      <div className="img-container">
        <img src={defaultImg} alt="single restaurant" />
        <div className="price-top">
          <h6>Rating 
          <Starts rating={rating} />
          </h6>
        </div>
        <Link to={`/restaurants/${id}`} className="btn-primary restaurant-link">
          Detail
        </Link>
      </div>
      <p className="restaurant-info">{name}</p>
      <p className="restaurant-info">Ciudad : {address['city']}</p>
    </article>
  );
});

Restaurant.propTypes = {
    restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};
export default Restaurant;