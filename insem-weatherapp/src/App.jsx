import React, { useState } from 'react';

export default function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const API_KEY = '4f9d3a1b7e6c9a5e23f3c1e33b8a6c5b'; // replace with your key

  const getWeather = async () => {
    const res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=57e11464b779cc91771d5d802cddf8ad&units=metric`
);

    const resultData = await res.json();
    setData(resultData);
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>

      {data && data.main ? (
        <p>
          {data.name}: {data.main.temp}°C, {data.weather[0].description}
        </p>
      ) : (
        data && <p>{data.message}</p>
      )}
    </div>
  );
}
