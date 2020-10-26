import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter, Link } from "react-router-dom";
import Rental from "./components/rental";
import New from "./components/new";
import Index from "./components/available";


const App = () => (
  <React.StrictMode>
    <h1>Awesome Bike Rental</h1>
    <New />
    <Rental path="/rentals" />
    <Index  parth="/index" />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById("app"));
