import { useState } from "react";

type PlayerSymbol = "X" | "O" | null;
const initialBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Board() {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = "X";

      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
