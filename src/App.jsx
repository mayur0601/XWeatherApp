import "./App.css";
import { useState } from "react";
import Card from "./Card";

export default function App() {
  const [location, setLocation] = useState("");
  const [temprature, setTemprature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [condition, setCondition] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setDisplay(false);
      let res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=22b2a482d217427cac093039232810&q=${location}&aqi=no`,
      );
      let data = await res.json();
      console.log(data);
      let currentWeather = data.current;
      console.log(currentWeather);
      setTemprature(currentWeather.temp_c + "°C");
      setHumidity(currentWeather.humidity + "%");
      setCondition(currentWeather.condition.text);
      setWindspeed(currentWeather.wind_kph + " kph");
      setLoading(false);
      setDisplay(true);
    } catch (error) {
      alert("Failed to fetch weather data");
      setDisplay(false);
      setLoading(false);
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading Data...</p>}
      {display && (
        <div className="cards">
          <Card label="Temprature" value={temprature} />
          <Card label="Humidity" value={humidity} />
          <Card label="Condition" value={condition} />
          <Card label="Wind Speed" value={windspeed} />
        </div>
      )}
    </main>
  );
}
