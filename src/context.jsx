import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
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
