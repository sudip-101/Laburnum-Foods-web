import React from "react";
import "./App.css";
import "./variables.css";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import Card from "./components/food-cards/card";
import Form from "./components/form/form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Carousel /> */}
          {/* <Card /> */}
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Form} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
