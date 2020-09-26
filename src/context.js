import React, { Component } from "react";
import items from "./data_melp.json";


const RestaurantContext = React.createContext();

export default class RestaurantProvider extends Component {
  state = {
    restaurants: [],
    sortedRestaurants: [],
    featuredRestaurant: [],
    loading: true,
    //
    ratingFilter:false,
    alphabeticallyFilter:false
  };


  componentDidMount() {
      let restaurants = this.formatData(items);
      let featuredRestaurant = restaurants.sort((a, b) => b.rating - a.rating);
      
    this.setState({
      restaurants,
      featuredRestaurant,
      sortedRestaurants: restaurants,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
    let id = item.id;
  

    let restaurant = { ...item, id };
    return restaurant;

  });
  return tempItems;
  }

  getRestaurant = slug => {
    let tempRestaurants = [...this.state.restaurants];
    const restaurant = tempRestaurants.find(restaurant => restaurant.id === slug);
    return restaurant;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterRestaurants
    );
  };
  filterRestaurants = () => {
    let {
      restaurants,
      ratingFilter,
      alphabeticallyFilter
    } = this.state;

    let tempRestaurants = [...restaurants];

    if(ratingFilter){
      tempRestaurants.sort((a, b) => a.rating - b.rating);
    }
    if(alphabeticallyFilter){
      tempRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    }

    this.setState({
      sortedRestaurants: tempRestaurants
    });
  };
  render() {
    return (
      <RestaurantContext.Provider 
        value={{
          ...this.state,
          getRestaurant: this.getRestaurant,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RestaurantContext.Provider>
    );
  }
}
const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer, RestaurantContext };

export function withRestaurantConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RestaurantConsumer>
        {value => <Component {...props} context={value} />}
      </RestaurantConsumer>
    );
  };
}