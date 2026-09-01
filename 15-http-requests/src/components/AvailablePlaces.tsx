import { Place } from "../App.js";
import Places from "./Places.jsx";

type AvailablePlacesProps = {
  onSelectPlace: (place: Place) => void;
};
export default function AvailablePlaces({ onSelectPlace }: AvailablePlacesProps) {
  return (
    <Places title="Available Places" places={[]} fallbackText="No places available." onSelectPlace={onSelectPlace} />
  );
}
