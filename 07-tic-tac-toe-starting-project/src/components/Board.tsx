import { useState } from "react";

export type PlayerSymbol = "X" | "O" | null;

export type GameTurnsProps = {
  square: { row: number; col: number };
  player: PlayerSymbol;
};

type BoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: PlayerSymbol[][];
};
export default function Board({ onSelectSquare, board }: BoardProps) {
  // let gameBoard = initialBoard;
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
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
