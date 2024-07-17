import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import "./LocationBar.css";

const LocationBar = ({ locations, onRemoveLocation, onSelectLocation }) => {
  return (
    <div className="location-bar">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onRemoveLocation={onRemoveLocation}
          onSelectLocation={onSelectLocation}
        />
      ))}
    </div>
  );
};

export default LocationBar;
