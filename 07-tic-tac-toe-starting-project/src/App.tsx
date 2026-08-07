import { useState } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import { PlayerSymbol } from "./components/Board";
import Log from "./components/Log";
import { GameTurnsProps } from "./components/Board";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
const initialBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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
  let gameBoard = initialBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

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

  let winner: string = "";
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
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
        {winner && <p>{winner} won!</p>}
        <Board onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
