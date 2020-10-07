import React, { useState, useEffect } from "react";
import api from "./api";
import useLocalStorageState from "../customHooks/useLocalStorageState";

import AddLocation from "./components/add-location";
import WeaterPannel from "./components/weather-pannel/";

import "./styles.css";

function WeatherApp(props) {
  const [location, setLocation] = useLocalStorageState("location", "");
  const [background, setBackground] = useState("");

  const handleSearch = (searchTerm) => {
    const typeQuery = parseInt(searchTerm) + "" === searchTerm ? "zip" : "q";
    api
      .fetchWeatherData(searchTerm, typeQuery)
      .then((wdata) => setLocation(wdata))
      .catch((e) => alert(e));
  };

  const getWeatherBg = (query = "blue sky") => {
    api
      .fetchPhotos(query)
      .then((res) => {
        const photoIndex = Math.floor(Math.random() * res.photos.length);
        const src = res.photos[photoIndex].src.large2x;
        setBackground(src);
      })
      .catch(() => console.log("error"));
  };

  useEffect(() => {
    if (location && location.weather && location.weather.length > 0) {
      getWeatherBg(location.weather[0].main);
    }
  }, [location]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
  }, [background]);

  return (
    <div>
      <AddLocation onAdd={(newLocation) => handleSearch(newLocation)} />
      <WeaterPannel {...location} />
    </div>
  );
}

export default WeatherApp;
