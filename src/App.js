import React from 'react';
import './App.css';

const Square = ({value}) => <button className='square'>{value}</button>

function Board() {
  return (
    <>
      <div className='board-row' id='board-top'>
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className='board-row' id='board-mid'>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className='board-row' id='board-bot'>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </>
  );
}

export default Board;