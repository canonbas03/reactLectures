import { useCallback, useEffect, useRef, useState } from "react";

import Places, { Place } from "./components/Places";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

type HandleMessageModel = {
  open: () => void;
  close: () => void;
};
const LOCAL_STORAGE_KEY = "selectedPlaces";
const rawData = localStorage.getItem(LOCAL_STORAGE_KEY);
const storedIds = rawData ? JSON.parse(rawData) : [];
const storedPlaces = storedIds.map((id: string) => AVAILABLE_PLACES.find((place) => place.id === id));

function App() {
  const modal = useRef<HandleMessageModel>(null);
  const selectedPlace = useRef<string | null>(null);
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces: Place[] = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude,
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id: string) {
    setModalIsOpen(true);

    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id: string) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      if (!place) return prevPickedPlaces;
      return [place, ...prevPickedPlaces];
    });

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storedIds]));
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current));
    setModalIsOpen(false);

    const updatedIds = storedIds.filter((id: string) => id !== selectedPlace.current);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedIds));
  }, []);

  return (
    <>
      <Modal open={modalIsOpen}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places title="Available Places" places={availablePlaces} onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
