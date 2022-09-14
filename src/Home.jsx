import HeroSection from "./components/HeroSection";
// import { AppContext } from "./context";

const Home = () => {
  // const fName = useContext(AppContext);

  const data = {
    name: "Sahil Pillania",
    image: "./images/gif.gif",
  };

  return <HeroSection {...data} />;
};

export default Home;
