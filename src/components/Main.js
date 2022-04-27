import React, { useState } from "react";
import moment from "moment";
import "moment-timezone";

import Footer from "./Footer";

import clearSky from "../images/clear_sky.svg";
import fewClouds from "../images/few_clouds.svg";
import nightFewClouds from "../images/night_few_clouds.svg";
import nightClearSky from "../images/night_clear_sky.svg";
import scatteredClouds from "../images/scattered_clouds.svg";
import showerRain from "../images/shower_rain.svg";
import snow from "../images/snow.svg";
import thunderStorm from "../images/thunderstorm.svg";
import weatherLogo from "../images/weather-logo.svg";

const api = {
  key: "cb6c26f0569f865f8485400d1d8d011a",
  base: "https://api.openweathermap.org/data/2.5/",
};

const date = new Date();

const Main = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return ` ${day}, ${date} ${month} ${year}`;
  };

  const getContinent = () => {
    if (
      weather.sys.country === "ES" ||
      weather.sys.country === "DE" ||
      weather.sys.country === "RU" ||
      weather.sys.country === "UA" ||
      weather.sys.country === "AT" ||
      weather.sys.country === "AL" ||
      weather.sys.country === "AD" ||
      weather.sys.country === "BE" ||
      weather.sys.country === "BG" ||
      weather.sys.country === "DK" ||
      weather.sys.country === "IT" ||
      weather.sys.country === "MD" ||
      weather.sys.country === "NO" ||
      weather.sys.country === "NL" ||
      weather.sys.country === "PT" ||
      weather.sys.country === "GB" ||
      weather.sys.country === "FR" ||
      weather.sys.country === "CZ" ||
      weather.sys.country === "SE" ||
      weather.sys.country === "CH"
    ) {
      return "Europe";
    } else if (
      weather.sys.country === "US" ||
      weather.sys.country === "CA" ||
      weather.sys.country === "DK" ||
      weather.sys.country === "PH" ||
      weather.sys.country === "BR" ||
      weather.sys.country === "CU" ||
      weather.sys.country === "HT" ||
      weather.sys.country === "GT" ||
      weather.sys.country === "PA" ||
      weather.sys.country === "AR" ||
      weather.sys.country === "MX"
    )
      return "America";
    else if (
      weather.sys.country === "JP" ||
      weather.sys.country === "PH" ||
      weather.sys.country === "LK" ||
      weather.sys.country === "SG" ||
      weather.sys.country === "AE" ||
      weather.sys.country === "CN" ||
      weather.sys.country === "ID" ||
      weather.sys.country === "IL" ||
      weather.sys.country === "HK" ||
      weather.sys.country === "GE"
    )
      return "Asia";
    else if (
      weather.sys.country === "AU" ||
      weather.sys.country === "NZ" ||
      weather.sys.country === "NF"
    )
      return "Australia";
    return;
  };

  const switchImg = () => {
    if (date.getHours() < 6 || date.getHours() > 21) {
      switch (weather.weather[0].main) {
        case "Clear":
          return (
            <img
              src={nightClearSky}
              alt="illustration weather description clear"
            />
          );
        case "Clouds":
          return (
            <img
              src={nightFewClouds}
              alt="illustration weather description clouds"
            />
          );
        case "Drizzle":
          return (
            <img
              src={scatteredClouds}
              alt="illustration weather description drizzle"
            />
          );
        case "Rain":
          return (
            <img src={showerRain} alt="illustration weather description rain" />
          );
        case "Thunderstorm":
          return (
            <img
              src={thunderStorm}
              alt="illustration weather description thunderstorm"
            />
          );
        case "Snow":
          return <img src={snow} alt="illustration weather description snow" />;
        default:
          return (
            <img
              src={scatteredClouds}
              alt="illustration weather description clouds"
            />
          );
      }
    } else {
      switch (weather.weather[0].main) {
        case "Clear":
          return (
            <img
              src={clearSky}
              alt="illustration weather description clear sky"
            />
          );
        case "Clouds":
          return (
            <img
              src={fewClouds}
              alt="illustration weather description clouds"
            />
          );
        case "Drizzle":
          return (
            <img
              src={scatteredClouds}
              alt="illustration weather description drizzle"
            />
          );
        case "Rain":
          return (
            <img src={showerRain} alt="illustration weather description rain" />
          );
        case "Thunderstorm":
          return (
            <img
              src={thunderStorm}
              alt="illustration weather description thunderstorm"
            />
          );
        case "Snow":
          return <img src={snow} alt="illustration weather description snow" />;
        default:
          return (
            <img
              src={scatteredClouds}
              alt="illustration weather description clouds"
            />
          );
      }
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="container">
          <img className="weather-logo" src={weatherLogo} alt="" />
          {typeof weather.main != "undefined" ? (
            <div className="content">
              <div className="temp-box">
                <div className="temp">{Math.round(weather.main.temp)}</div>
                <span className="deg">°c</span>
              </div>
              <div className="image-box">{switchImg()}</div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">
                  <span>
                    {moment()
                      .tz(
                        `${getContinent()}/${weather.name.split(" ").join("_")}`
                      )
                      .format("hh:mm")}
                  </span>
                  {dateBuilder(date)}
                </div>
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          ) : (
            <div className="hint">Write the name of the city in the search</div>
          )}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
};

export default Main;
