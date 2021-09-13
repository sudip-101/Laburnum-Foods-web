import React from "react";
import Carousel from "./components/carousel/carousel";
import Card from "./components/food-cards/card";

const Home = () => {
    return (
        <div className="home">
            <Carousel />
            <Card />
        </div>
    );
};

export default Home;
