import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  // const data = {
  //     name: "SaHiL",
  //     image: "./images/about.gif"
  // }
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => {
    updateAboutPage();
  }, []);
  return <HeroSection />;
};

export default About;
