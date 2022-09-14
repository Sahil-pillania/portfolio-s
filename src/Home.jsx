import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {

    const data = {
      name: "Sahil Pillania",
      image: "./images/gif.gif",
    };

  return <HeroSection {... data}/>;
};

export default Home;
