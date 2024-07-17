import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import Weather from "./components/Weather/Weather";
import Loading from "./components/Loading/Loading";
import "./App.css";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const addLocation = (location) => {
    if (locations.length >= 6) {
      setErrorMessage("You can only add up to 6 locations.");
      return;
    }
    setLocations([...locations, location]);
  };

  const removeLocation = (id) => {
    setLocations(locations.filter((location) => location.id !== id));
  };

  const fetchWeather = async (location) => {
    setWeatherData(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=a20f553be565e5223833b7997846a9bc&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setErrorMessage("Failed to fetch weather data.");
    }
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    fetchWeather(location);
  };

  useEffect(() => {
    if (selectedLocation) {
      fetchWeather(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <div className="app">
      <Header />
      <SearchBar
        onAddLocation={addLocation}
        setErrorMessage={setErrorMessage}
      />
      {errorMessage && (
        <FeedbackBar
          message={errorMessage}
          clearMessage={() => setErrorMessage("")}
        />
      )}
      <LocationBar
        locations={locations}
        onRemoveLocation={removeLocation}
        onSelectLocation={handleSelectLocation}
      />
      <Weather weatherData={weatherData} />
      {!weatherData && selectedLocation && <Loading />}
    </div>
  );
};

export default App;
