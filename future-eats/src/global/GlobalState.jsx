import GlobalStateContext from "./GlobalStateContext";
import React from "react";
import Axios from "axios";
import {baseUrl} from "../constants/baseUrl"

const GlobalState = (props) => {
 
  const states = {};
  const setters = {};
  const requests = {};
  const data = { states, setters, requests };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
