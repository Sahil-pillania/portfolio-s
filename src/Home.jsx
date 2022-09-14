import HeroSection from "./components/HeroSection";
import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
// import { AppContext } from "./context";

const Home = () => {
  // const fName = useContext(AppContext);

  // const data = {
  //   name: "Sahil Pillania",
  //   image: "./images/gif.gif",
  // };

  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);

  return <HeroSection />;
};

export default Home;
