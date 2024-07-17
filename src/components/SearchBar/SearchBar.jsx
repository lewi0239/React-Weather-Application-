import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onAddLocation, setErrorMessage }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=a20f553be565e5223833b7997846a9bc`
      );
      const data = await response.json();
      if (data.length > 0) {
        const location = {
          id: crypto.randomUUID(),
          lat: data[0].lat,
          lng: data[0].lon,
          country: data[0].country,
          name: data[0].name,
        };
        onAddLocation(location);
        setQuery("");
      } else {
        setErrorMessage(
          "Location does not exist, please enter a new location."
        );
      }
    } catch (error) {
      setErrorMessage("Error fetching location, please try again.");
      console.error("Error fetching location:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>City, Province, Country</label>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Find Location</button>
    </form>
  );
};

export default SearchBar;
