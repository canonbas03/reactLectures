import { useState } from "react";
import { Place } from "../App.js";
import Places from "./Places.jsx";

type AvailablePlacesProps = {
  onSelectPlace: (place: Place) => void;
};
export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  const [availablePlaces, setSvailablePlaces] = useState([]);
  fetch("http://localhost:3000/places")
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      setSvailablePlaces(resData.places);
    });

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
