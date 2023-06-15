import React from 'react';
import './App.css';
import {useState} from 'react';

const Square = ({value, clickedSquare}) => <button className='square' onClick={clickedSquare}>{value}</button>

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  return (
    <>
      <div className='board-row' id='board-top'>
        <Square value={squares[0]} clickedSquare={() => handleClick(0)}/>
        <Square value={squares[1]} clickedSquare={() => handleClick(1)}/>
        <Square value={squares[2]} clickedSquare={() => handleClick(2)}/>
      </div>
      <div className='board-row' id='board-mid'>
        <Square value={squares[3]} clickedSquare={() => handleClick(3)}/>
        <Square value={squares[4]} clickedSquare={() => handleClick(4)}/>
        <Square value={squares[5]} clickedSquare={() => handleClick(5)}/>
      </div>
      <div className='board-row' id='board-bot'>
        <Square value={squares[6]} clickedSquare={() => handleClick(6)}/>
        <Square value={squares[7]} clickedSquare={() => handleClick(7)}/>
        <Square value={squares[8]} clickedSquare={() => handleClick(8)}/>
      </div>
    </>
  );
}

export default Board;

//next; completing the game - taking turns