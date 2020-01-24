import React, { Component, useReducer } from "react";
import "./App.css";
import AppContext from '../contexts/AppContext';
import SmurfForm from "./SmurfForm";
import SmurfDisplay from './SmurfDisplay'
import { reducer, initialState } from "../reducers/reducer";
function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={{ appState, dispatch }}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfForm />
        <SmurfDisplay />
      </AppContext.Provider>
    </div>
  );
}

export default App;
