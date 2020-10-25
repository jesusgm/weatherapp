import React, { useState, useEffect } from "react";
import api from "./api";
import useLocalStorageState from "../customHooks/useLocalStorageState";

import AddLocation from "./components/add-location";
import WeaterPannel from "./components/weather-pannel/";
import Loading from "./components/loading/"

import "./styles.css";

function WeatherApp(props) {
  const [locations, setLocations] = useLocalStorageState("location", []);
  const [selLocIndex, setSelLocIndex] = useLocalStorageState("selectedLocationIndex", locations.length  > 0 ? 0 : -1);
  const [background, setBackground] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchTerm) => {
    const typeQuery = parseInt(searchTerm) + "" === searchTerm ? "zip" : "q";
    setLoading(true);
    api
      .fetchWeatherData(searchTerm, typeQuery)
      .then((wdata) => {
        if(wdata.cod === 200 && !locations.some(l => l.id === wdata.id)){
          const newLocations = [...locations, wdata];
          setLocations(newLocations)
          setSelLocIndex(newLocations.length - 1);          
        }else{
          alert(wdata.message);
        }
      })
      .catch((e) => alert(e))
      .finally(() => setLoading(false));
  };

  const getWeatherBg = (query = "sunny sky blue") => {
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
    if (locations && locations.length > 0 && locations[selLocIndex] && locations[selLocIndex].weather && locations[selLocIndex].weather.length > 0) {
      getWeatherBg(locations[selLocIndex].weather[0].main);
    }else{
      getWeatherBg();
    }
  }, [locations, selLocIndex]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${background})`;
  }, [background]);

  const handleRemove = (id) => {
    const newLocations = locations.filter(location => location.id !== id)
    setLocations(newLocations)
    setSelLocIndex(newLocations.length - 1);
  }

  return (
    <div>
      <AddLocation onAdd={(newLocation) => handleSearch(newLocation)} />
      <div className="locations-list">
      {locations && locations.map((location, index) => (
        <WeaterPannel 
          key={location.key} 
          {...location} 
          onRemove={() => handleRemove(location.id)} 
          onClick={() => setSelLocIndex(index)} 
          selected={selLocIndex === index}
        />
      ))} 
      </div>
      <Loading visible={loading} />
    </div>
  );
}

export default WeatherApp;
