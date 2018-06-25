import React from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import "./App.css";


const App = () => (
  <div className="container-fluid Wrapper">
    <Jumbotron />
    <Wrapper /> 
  </div>
);

export default App;
