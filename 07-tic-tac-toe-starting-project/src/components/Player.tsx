import { useState } from "react";

type PlayerProps = {
  name: string;
  symbol: string;
};

export default function Player({ name, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{name}</span>;
  let buttonText = "Edit";
  if (isEditing) {
    playerName = <input type="text" required></input>;
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {buttonText}
      </button>
    </li>
  );
}
