import React from "react";
import { withRestaurantConsumer } from "../context";
import Loading from "./Loading";
import RestaurantsFilter from "./RestaurantsFilter";
import RestaurantsList from "./RestaurantsList";


function RestaurantsContainer({ context }) {
  const { loading, sortedRestaurants, restaurants } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RestaurantsFilter restaurants={restaurants} />
      <RestaurantsList restaurants={sortedRestaurants} />
    </>
  );
}
export default withRestaurantConsumer(RestaurantsContainer);