import React, { Component } from 'react';
import Row from './Row';
// const math = require('mathjs');

class Board extends Component {
  constructor(props) {
    super(props);
    this.rowCount = 4;
    this.squareCount = 4;
    this.state = {
      "board": this.createMatrix(this.rowCount, this.squareCount)
    };
  }

  createMatrix(r, c) {
      const randomInt = () => { return Math.round(Math.random()); };
      let matrix = [];

      for (let i = 1; i <= r; i++) {
        let row = [];
        for (let j = 1; j <= c; j++) {
          row.push(Boolean(randomInt()));
        }
        matrix.push(row);
      }
      console.log(matrix);
      return matrix;
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
