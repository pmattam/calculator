import React from 'react';

let Buttons = ({ handleClick }) =>
  <div className='buttons'>
    <div className='row1'>
      <button className='ac' value='AC' onClick={handleClick}>AC</button>
      <button className='div' value='/'>/</button>
    </div>
    <div className='row2'>
      <button className='seven' value='7' onClick={handleClick}>7</button>
      <button className='eight' value='8' onClick={handleClick}>8</button>
      <button className='nine' value='9' onClick={handleClick}>9</button>
      <button className='mul' value='*'>x</button>
    </div>
    <div className='row3'>
      <button className='four' value='4' onClick={handleClick}>4</button>
      <button className='five' value='5' onClick={handleClick}>5</button>
      <button className='six' value='6' onClick={handleClick}>6</button>
      <button className='sub' value='-'>-</button>
    </div>
    <div className='row4'>
      <button className='one' value='1' onClick={handleClick}>1</button>
      <button className='two' value='2' onClick={handleClick}>2</button>
      <button className='three' value='3' onClick={handleClick}>3</button>
      <button className='add' value='+'>+</button>
    </div>
    <div className='row5'>
      <button className='zero z1' value='0' onClick={handleClick}>0</button>
      <button className='decimal' value='.'>.</button>
      <button className='equals' value='='>=</button>
    </div>
  </div>

export default Buttons;