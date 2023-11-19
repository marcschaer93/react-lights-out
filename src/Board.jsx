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

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let i = 0; i < ncols; i++) {
      let newRow = [];
      for (let j = 0; j < nrows; j++) {
        const trueOrFalse = Math.random() < chanceLightStartsOn ? true : false;
        newRow.push(trueOrFalse);
      }
      initialBoard.push(newRow);
    }

    console.log("initBoard", initialBoard);
    // TODO: create array-of-arrays of true/false values
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord) {
    console.log("coord", coord);
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      // !!! Make a shallow copy of inner and outer Array!
      const boardCopy = oldBoard.map((row) => [...row]);

      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);

      return boardCopy;

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  return (
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((bool, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isLit={bool}
                flipCellsAroundMe={
                  () => flipCellsAround(`${rowIndex}-${colIndex}`)
                  // clickAndConsole("Hello")
                }
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  // TODO
}

export default Board;
