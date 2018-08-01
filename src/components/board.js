import React, { Component } from 'react';
import Row from './row';
// const math = require('mathjs');

var generateBoard = (rowCount, squareCount) => {
  let board = [];
  for (let i =0; i< rowCount; i++){
    let newRow = [];
    for (let j = 0; j < squareCount; j++){
      if(i === 1 && j ===1){
        newRow[j] = true;
      }else{
      newRow[j] = false;
    }}
    board.push(newRow);
  }
  console.log('generate board', board)
  console.log('1,1', board[1][1] )
  return board;
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.rowCount = 4;
    this.squareCount = 4;
    this.state = {
      "board": generateBoard(this.rowCount, this.squareCount)
    };
  }

  checkLife(){
    for (let i = 0; i =< this.rowCount; i++){
      for (let j = 0; j =< this.squareCount; j++){
        if (j){
          j = this.countNeighbors(i, j)
        }
      }
    }
  }

countNeighbors(row, square){
var cell = this.state.board[row][square];
neighbors = [
             [-1,-1], [-1,0], [-1,1],
             [0,-1],          [0,1],
             [1,-1],  [1,0],  [1,1]
            ]
neighborsTop = this.state.board[row-1 =< this.rowCount ? row-1 : this.rowCount + 1].slice(square -1 )
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
