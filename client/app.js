import React, { Component } from "react";
import ReactDOM from "react-dom";
import Rental from "./components/rental";
import New from "./components/new";
import Index from "./components/index";


const App = () => (
  <React.StrictMode>
    <h1>Awesome Bike Rental</h1>
    <New />
    <Rental  />
    <Index  />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("app"));
