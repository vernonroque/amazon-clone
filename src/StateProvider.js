import React, {createContext,useContext,useReducer} from 'react';

//Prepares the dataLayer
export const StateContext = createContext();

//Wraps our app and provide the Data Layer
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
