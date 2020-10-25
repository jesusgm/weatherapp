import React from "react";

function WeatherPannel({ name, weather, wind, main, onRemove, onClick, selected}) {
  if (!weather) {
    return null;
  }

  const currentWheater = weather[0];

  return (
    <div className={`weather-pannel ${selected ? "seledted" : ""}`}onClick={() => onClick()}>
      <span className="remove-icon" onClick={() => onRemove()}>X</span>
      <h1 className="city-name">
        <span>{name}</span>
        <img
          src={`http://openweathermap.org/img/wn/${currentWheater.icon}.png`}
          alt={currentWheater.description}
        />
      </h1>
      <hr />
      <div className="info-row description">{`${currentWheater.description
        .charAt(0)
        .toUpperCase()}${currentWheater.description.slice(1)}`}</div>
      <div className="info-row temeperature">
        Temperatura (act/min/max): {main.temp}ºC / {main.temp_min}ºC /{" "}
        {main.temp_max}ºC
      </div>
      <div className="info-row humidity">Humedad: {main.humidity}</div>
      <div className="info-row wind">
        Velocidad del viento: {wind.speed} m/s
      </div>
    </div>
  );
}

export default WeatherPannel;
