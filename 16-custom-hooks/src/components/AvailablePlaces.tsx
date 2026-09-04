import { useCallback, useEffect, useState } from "react";
import { Place } from "../App.js";
import Places from "./Places.js";
import ErrorComponent from "./Error.js";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import useFetch from "../hooks/useFetch.js";

type AvailablePlacesProps = {
  onSelectPlace: (place: Place) => void;
};

async function fetchSortedPlaces(): Promise<Place[]> {
  const places = await fetchAvailablePlaces();

  return new Promise<Place[]>((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces: Place[] = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  const {
    fetchedData: availablePlaces,
    isFetching: isLoading,
    error,
    handleErrorState,
  } = useFetch<Place[]>(fetchSortedPlaces, []);

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
