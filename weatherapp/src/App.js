import React, { useState } from 'react';
import { TiWeatherCloudy, TiWeatherShower, TiWeatherSunny, TiWeatherWindyCloudy } from 'react-icons/ti';
import keys from './api/keys';

import './App.css';

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {

  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if(e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setQuery("");
        setWeather(result);
        console.log(result);
      })
      .catch((err) => {
        //console.log("API:" + `${api.base}weather?q=${query}&units=metric&appid=${api.key}` );
        console.log("Error: " + err);
      });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 18
            ? "App Hot"
            : "App Cold"
          : "App"
      }
    >
      <main>
        <div className="search-container">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter a City..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {
          typeof weather.main != "undefined" ? (
            <div>
              <div className="location-container">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{dateBuild(new Date())}</div>
              </div>
              <div className="weather-container">
                <div className="weather-icon">
                  {(() => {
                    switch (weather.weather[0].main) {
                      case "Clouds": return <TiWeatherCloudy />
                      case "Rain": return <TiWeatherShower />
                      case "Mist": return <TiWeatherWindyCloudy />
                      default: return <TiWeatherSunny />
                    }
                  })()}
                </div>
                <div className="weather">{weather.weather[0].main}</div>
                <div className="temperature">
                  {Math.round(weather.main.temp)}°C
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        }
      </main>
    </div>
  );
}

export default App;
