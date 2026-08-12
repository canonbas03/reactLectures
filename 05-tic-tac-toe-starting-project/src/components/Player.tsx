import { ChangeEvent, useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, name: string) => void;
};

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}: PlayerProps) {
  const [isEditing, setIsEditing] = useState<boolean | null>(false);
  const [playerName, setPlayerName] = useState(initialName);
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
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
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonText}</button>
    </li>
  );
}
