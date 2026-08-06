import { useState } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import { PlayerSymbol } from "./components/Board";
import Log from "./components/Log";
import { GameTurnsProps } from "./components/Board";

function deriveActivePlayer(gameTurns: GameTurnsProps[]) {
  let currentPlayer: PlayerSymbol = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState<GameTurnsProps[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
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
        <Board onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
