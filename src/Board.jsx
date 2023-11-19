import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

// Added default Values. If no Values are passed through it uses the defaults.

function Board({ title, nrows = 3, ncols = 3, chanceLightStartsOn = 0.25 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    // TODO: create array-of-arrays of true/false values
    let initialBoard = [];
    for (let i = 0; i < ncols; i++) {
      let newRow = [];
      for (let j = 0; j < nrows; j++) {
        const trueOrFalse = Math.random() < chanceLightStartsOn ? true : false;
        newRow.push(trueOrFalse);
      }
      initialBoard.push(newRow);
    }

    return initialBoard;
  }

  function hasWon() {
    board.every((row) => row.every((cell) => !cell));
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      // TODO: Make a (deep) copy of the oldBoard
      // !!! Make a shallow copy of inner and outer Array!
      const boardCopy = oldBoard.map((row) => [...row]);

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <div>You Won!!! 🏆</div>;
  }

  // TODO

  // make table board

  // board example: let board =
  // [[true, false, true], [false, true, true], [false, false, false]]

  return (
    <table>
      <h3>{title}</h3>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((bool, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isLit={bool}
                flipCellsAroundMe={() =>
                  flipCellsAround(`${rowIndex}-${colIndex}`)
                }
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Board;
