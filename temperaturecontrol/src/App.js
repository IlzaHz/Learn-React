import React, { useState } from 'react';

const App = () => {
  
  const [temperatureValue, setTemperatureValue] = useState(10);
  //state hook to hold the temperature color
  const [temperatureColor, setTemperatureColor] = useState("cold");

  //passing reference to increase/decrease functions
  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    //set state value to hot (red)
    if(newTemperature >= 15) {
      setTemperatureColor("hot");
    }
  };
  
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);

    //set state value to cold (blue)
    if(newTemperature < 15) {
      setTemperatureColor("cold");
    }
  };


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
