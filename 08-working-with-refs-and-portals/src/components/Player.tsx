import { useRef, useState } from "react";

export default function Player() {
  const playerNameRef = useRef<HTMLInputElement>(null);
  const [playerName, setPlayerName] = useState<string | null>(null);
  function handleSetPlayerName() {
    if (playerNameRef.current) {
      setPlayerName(playerNameRef.current.value);
      playerNameRef.current.value = "";
    }
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleSetPlayerName}>Set Name</button>
      </p>
    </section>
  );
}
