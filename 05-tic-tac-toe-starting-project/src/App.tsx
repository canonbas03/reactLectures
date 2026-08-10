import { useState } from "react";
import Board from "./components/Board.js";
import Player from "./components/Player.js";
import { PlayerSymbol } from "./components/Board.js";
import Log from "./components/Log.js";
import { GameTurnsProps } from "./components/Board.js";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.js";
const INITIAL_BOARD: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const PLAYERS = {
  X: "Player1",
  O: "Player2",
};

function deriveActivePlayer(gameTurns: GameTurnsProps[]) {
  let currentPlayer: PlayerSymbol = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

type Players = {
  X: string;
  O: string;
};
function deriveWinner(gameBoard: PlayerSymbol[][], players: Players): string {
  let winner: string = "";
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol: PlayerSymbol =
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
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurnsProps[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...INITIAL_BOARD.map((array) => [...array])];
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

  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol: string, newName: string): void {
    setPlayers((prevNames) => {
      return {
        ...prevNames,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          ></Player>
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <Board onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
