import React from "react";
import "./LocationCard.css";

const LocationCard = ({ location, onRemoveLocation, onSelectLocation }) => {
  return (
    <div className="location-card" onClick={() => onSelectLocation(location)}>
      <h2>{location.name}</h2>
      <p>{location.country}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemoveLocation(location.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default LocationCard;
