import React from "react";
import "./App.css";

import Error from "./pages/Error";
import SingleRestaurant from "./pages/SingleRestaurant"
import Restaurants from "./pages/Restaurants";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>

        <Route exact path={process.env.PUBLIC_URL + '/'} component={Restaurants} />
        <Route exact path={process.env.PUBLIC_URL +"/restaurants/"} component={Restaurants} />
        <Route exact path={process.env.PUBLIC_URL+"/restaurants/:slug"} component={SingleRestaurant} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;