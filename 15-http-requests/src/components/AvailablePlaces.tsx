import { useEffect, useState } from "react";
import { Place } from "../App.js";
import Places from "./Places.jsx";
import ErrorComponent from "./Error.js";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

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
        const places = fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
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
