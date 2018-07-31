import React, { Component } from 'react';
import Row from './row';
// const math = require('mathjs');

var generateBoard = (rowCount, squareCount) => {
  let board = [];
  for (let i =0; i< rowCount; i++){
    let newRow = {};
    for (let j = 0; j < squareCount; j++){
      newRow[j] = false;
    }
    board.push(newRow);
  }
  return board;
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.rowCount = 3;
    this.squareCount = 3;
    this.state = {
      "board": generateBoard(this.rowCount, this.squareCount)
    };
  }

  render() {
    let rows = [];
    let rowContainer = <div>{rows}</div>
    for (let i =0; i < this.rowCount; i++) {
      rows.push(
        <div className='row'>
        <Row key={i} row={i}  squareCount={this.squareCount}/>
        </div>
      );
    }
    return (
       <div>
         {rowContainer}
       </div>
    );
  }
}

export default Board;
