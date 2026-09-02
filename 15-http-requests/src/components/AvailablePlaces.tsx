import { useEffect, useState } from "react";
import { Place } from "../App.js";
import Places from "./Places.jsx";
import ErrorComponent from "./Error.js";
import { sortPlacesByDistance } from "../loc.js";

type AvailablePlacesProps = {
  onSelectPlace: (place: Place) => void;
};

export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
        });
      } catch (error) {
        if (error instanceof Error) setError(error.message || "Couldnt fetch places, plese try again later");
      }

      setIsLoading(false);
    }
    fetchPlaces();
  }, []);

  function handleErrorState() {
    setError(undefined);
  }
  if (error) {
    return <ErrorComponent title="An error occured" message={error} onConfirm={handleErrorState} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      isLoading={isLoading}
      loadingText="Places are loading ..."
      onSelectPlace={onSelectPlace}
    />
  );
}
