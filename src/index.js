import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import WeatherApp from "./wheatherapp/";

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById("root")
);
