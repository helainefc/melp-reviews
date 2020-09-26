
import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import RestaurantContainer from "../components/RestaurantContainer";

const Restaurants = () => {
  return (
    <>
      <Hero hero="restaurantsHero">
      <Banner
          title="The best restaurants in the city"
          subtitle="MELP Reviews">
        </Banner>
      </Hero>
      <RestaurantContainer />
    </>
  );
};

export default Restaurants;