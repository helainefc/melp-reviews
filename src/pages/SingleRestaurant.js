import React, { Component } from "react";
import defaultBcg from "../images/restaurant-2.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../context";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import Starts from "../components/Starts"

export default class SingleRestaurant extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RestaurantContext;

  render() {
    const { getRestaurant } = this.context;
    const restaurant = getRestaurant(this.state.slug);

    if (!restaurant) {
      return (
        <div className="error">
          <h3> no such restaurant could be found...</h3>
          <Link to="/" className="btn-primary">
            back to Home
          </Link>
        </div>
      );
    }
    const {
      name,
      rating,
      contact,
      address
    } = restaurant;

    return (
      <>
        <Hero hero="restaurantsHero">
          <Banner title={`${name} restaurant`}>
            <Link to="/" className="btn-primary">
              back to home
            </Link>
          </Banner>
        </Hero>
        <section className="single-restaurant">
          <div className="single-restaurant-info">
            <article className="desc">
              <h3>Rating</h3>
              <h3>
              <Starts rating={rating} />
              </h3>
            </article>
          </div>
        </section>
        <section className="single-restaurant">
          <div className="single-restaurant-info">
            <article className="desc">
              <h3>contact</h3>
              <h6><CgWebsite /> site : <a href={contact['site']} rel="noopener noreferrer"  target="_blank">{contact['site']}</a>
              </h6>
              <h6><HiOutlineMail /> email : {contact['email']}</h6>
              <h6><FiPhoneCall /> phone : {contact['phone']}</h6>
            </article>
            <article className="desc">
              <h3>address</h3>
              <h6> city : {address['state']}, {address['city']}</h6>
              <h6> street : {address['street']}</h6>
            </article>
          </div>
        </section>
      </>
    );
  }
}