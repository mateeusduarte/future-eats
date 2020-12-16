import GlobalStateContext from "./GlobalStateContext";
import React from "react";

const GlobalState = (props) => {
    const states = {}
    const setters = {}
    const requests = {}
    const data = {states, setters, requests}
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;