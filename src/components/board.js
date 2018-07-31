import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'board': this.createMatrix(3, 3)
    };
  }

  // put in component did mount event? Which is the best place?
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
    return matrix;
  }

  renderSquares() {
    const detectAdjNode = (board) => {
      board.forEach( (val, ind) => {
        
      });
    };

    // why does this not work with forEach?
    return this.state.board.map( (val) => {
      return val.map( () => {
        return <Square />;
      });
    });
  }

  render() {
    return (
      <div>
        {this.renderSquares()}
      </div>
    );
  }
}

export default Board;
