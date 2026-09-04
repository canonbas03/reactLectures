import { useRef, useState } from "react";

import Places, { Place } from "./components/Places";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal";
import DeleteConfirmation from "./components/DeleteConfirmation";
import logoImg from "./assets/logo.png";

type HandleMessageModel = {
  open: () => void;
  close: () => void;
};

function App() {
  const modal = useRef<HandleMessageModel>(null);
  const selectedPlace = useRef<string | null>(null);
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>([]);

  function handleStartRemovePlace(id: string) {
    if (modal.current) {
      modal.current.open();
    }
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    if (modal.current) {
      modal.current.close();
    }
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
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
    );
    if (modal.current) modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
