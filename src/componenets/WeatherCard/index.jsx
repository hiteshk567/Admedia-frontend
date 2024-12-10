import React, { useState, useEffect } from "react";

const VITE_API_URL =
  import.meta.env.VITE_API_URL ||
  "https://weather-info-backend-m4dyiuqbs-hiteshk567s-projects.vercel.app/weather";
console.log(" VITE_API_URL", VITE_API_URL);

const styles = {
  card: {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "400px",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f0f8ff",
    margin: "0",
  },
};

const WeatherCard = (props) => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}weather`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong while fetching weather data");
        }
        const weatherData = await response.json();
        setWeatherInfo(weatherData);
      } catch (error) {
        console.log("error", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherInfo) {
    return <div>No data available</div>;
  }

  const { city, temperature, description, icon } = weatherInfo;
  const weatherIconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Current Conditions For:</h3>
        <h1>{city}</h1>
        <h1>{temperature + " °F"}</h1>
        <img src={weatherIconUrl} alt={description} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
