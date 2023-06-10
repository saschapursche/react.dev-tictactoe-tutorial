import React from 'react';
import './App.css';
import {useState} from 'react';

const Square = ({value, clickedSquare}) => <button className='square' onClick={clickedSquare}>{value}</button>

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {
    const nextSquares = squares.sclice(); //error
    nextSquares[0] = 'X';
    setSquares(nextSquares);
  }
  return (
    <>
      <div className='board-row' id='board-top'>
        <Square value={squares[0]} clickedSquare={handleClick}/>
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className='board-row' id='board-mid'>
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className='board-row' id='board-bot'>
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default Board;