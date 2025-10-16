import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const res = await fetch(`  https://api.openweathermap.org/data/2.5/weather?q=London&appid=57e11464b779cc91771d5d802cddf8ad&units=metric
`);
    setData(await res.json());
  };

  return (
    <div>
      <h2>Weather app</h2>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {data && (
        <p>
          {data.name}: {data.main.temp}°C, {data.weather[0].description}
        </p>
      )}
    </div>
  );
}

export default Weather;
