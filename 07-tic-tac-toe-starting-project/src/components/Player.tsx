import { ChangeEvent, useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: string;
};

export default function Player({ initialName, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  function handlePlayerName(event: ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      ></input>
    );
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {buttonText}
      </button>
    </li>
  );
}
