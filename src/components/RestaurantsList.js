import React from "react";
import Restaurant from "./Restaurant";

const RestaurantsList = ({ restaurants }) => {

  if (restaurants.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no restaurants matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="restaurantslist">
      <div className="restaurantslist-center">
        {restaurants.map(item => {
          return <Restaurant key={item.id} restaurant={item} />;
        })}
      </div>
    </section>
  );
};

export default RestaurantsList;