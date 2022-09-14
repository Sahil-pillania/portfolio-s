import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const API = "https://thapareactapi.up.railway.app/";

const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
    services: [],
  };
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Sahil Pillania",
        image: "./images/gif.gif",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Sahil",
        image: "./images/about.gif",
      },
    });
  };
  // API function expression

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_SERVICES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // to call an API
  useEffect(() => {
    getServices(API);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global context

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
