import { useState } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import { PlayerSymbol } from "./components/Board";

function App() {
  const [activePlayer, setActivePlayer] = useState<PlayerSymbol>("X");

  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X",
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <Board
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
