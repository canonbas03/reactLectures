import { useState } from "react";

export type PlayerSymbol = "X" | "O" | null;
const initialBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export type GameTurnsProps = {
  square: { row: number; col: number };
  player: PlayerSymbol;
};

type BoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: GameTurnsProps[];
};
export default function Board({ onSelectSquare, turns }: BoardProps) {
  let gameBoard = initialBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
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
