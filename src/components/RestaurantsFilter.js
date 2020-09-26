import React from "react";
import { useContext } from "react";
import { RestaurantContext } from "../context";
import Title from "./Title";

const RestaurantsFilter = ({ restaurants }) => {

  const context = useContext(RestaurantContext);

  const {
    handleChange,
    ratingFilter,
    alphabeticallyFilter
  } = context;


  return (
    <section className="filter-container">
      <Title title="restaurants" />
      <form className="filter-form">
   
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="ratingFilter"
              id="raiting"
              checked={ratingFilter}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Order by Rating</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="alphabeticallyFilter"
              checked={alphabeticallyFilter}
              onChange={handleChange}
            />
            <label htmlFor="alphabetically">Order alphabetically</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RestaurantsFilter;