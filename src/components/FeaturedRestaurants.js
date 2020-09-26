import React, { Component } from "react";
import Title from "./Title";
import { RestaurantContext } from "../context";
import Loading from "./Loading";
import Restaurant from "./Restaurant";

export default class FeaturedRestaurants extends Component {
  static contextType = RestaurantContext;

  render() {
    let { loading, featuredRestaurant: restaurants } = this.context;

    restaurants = restaurants.map(restaurant => {
      return <Restaurant key={restaurant.id} restaurant={restaurant} />;
    });
    return (
      <section className="featured-restaurants">
        <Title title="Restaurants" />
        <div className="featured-restaurants-center">
          {loading ? <Loading /> : restaurants}
        </div>
      </section>
    );
  }
}
