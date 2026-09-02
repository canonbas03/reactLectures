import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { fetchUserPlaces, updateUserPlaces } from "./http.js";
import ErrorComponent from "./components/Error";

export type Place = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
};

function App() {
  const selectedPlace = useRef<Place>();

  const [userPlaces, setUserPlaces] = useState<Place[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<string>("");

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places: Place[] = await fetchUserPlaces();

        setUserPlaces(places);

        setIsFetching(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message || "Failed to fetch user places.");

        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  function handleStartRemovePlace(place: Place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleError() {
    setErrorUpdatingPlaces("");
  }
  async function handleSelectPlace(selectedPlace: Place) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      if (error instanceof Error) setErrorUpdatingPlaces(error.message || "Failed to update places.");
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    if (selectedPlace.current) {
      const selectedId = selectedPlace.current.id;
      if (selectedId) {
        setUserPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedId));
      }

      try {
        await updateUserPlaces(userPlaces.filter((place) => place.id != selectedPlace.current?.id));
      } catch (error) {
        setUserPlaces(userPlaces);
        if (error instanceof Error) setErrorUpdatingPlaces(error.message || "Failed to delete place.");
      }
    }

    setModalIsOpen(false);
  }, []);

  function handleErrorState() {
    setError(undefined);
  }
  return (
    <>
      <Modal open={!!errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <ErrorComponent title="An error occured!" message={errorUpdatingPlaces} onConfirm={handleError} />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        {error && <ErrorComponent title="An error occured!" message={error} onConfirm={handleErrorState} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Loading your places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
