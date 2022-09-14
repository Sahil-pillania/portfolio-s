import React from "react";
import HeroSection from "./components/HeroSection"

const About = () => {

  const data = {
      name: "SaHiL",
      image: "./images/about.gif"
  }
  return <HeroSection {...data}/>;
};

export default About;
