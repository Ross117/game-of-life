import React from 'react'
import { css } from 'emotion'

const squareStyle = css`
  width: 98px;
  height: 98px;
  border: 1px solid black;
  float: left;
`

const Square = ({ first, second, active }) => {
  const style = {
    backgroundColor: active? "green" : "white"
  }
  return (
    <input 
      type="button"
      style={style}
      className={squareStyle} 
      value={`${first},${second}`}/>
  );
};

export default Square;
