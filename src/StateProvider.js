import React, {createContext , useContext , useReducer} from "react";

// Create context is similar to create store
export const StateContext = createContext();

export const StateProvider = ({ reducer , initialState , children }) => (
    <StateContext.Provider value = {useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); 