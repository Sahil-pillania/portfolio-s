import HeroSection from "./components/HeroSection";
import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import Services from "./Services";
import Contact from "./Contact";

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

  return (
    <>
      <HeroSection />
      <Services />

      <Contact />
    </>
  );
};

export default Home;
