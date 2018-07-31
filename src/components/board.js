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
    console.log(matrix);
    return matrix;
  }


  updateBoard() {

    const board = this.state.board;

    const getNeighbours = (r, c) => {
      // returns an array of the given node's neighbours;
      let neighbours = [];

      board.forEach( (rowArr, rowInd) => {
        rowArr.forEach( (ele, colInd) => {
          // make sure node doesn't find itself
          if (!(r === rowInd && c === colInd) &&
            (r === rowInd || r === rowInd - 1 || r === rowInd + 1) &&
            (c === colInd || c === colInd - 1 || c === colInd + 1)) {
            neighbours.push(ele);
          }
        });
      });

      return neighbours;
    };

    const updatedBoard = board.map( (rowArr, rowInd) => {
      return rowArr.map( (ele, colInd) => {
        const neighbours = getNeighbours(rowInd, colInd);
        console.log([rowInd, colInd, neighbours]);
        // return ele with val true or false depending on neighbours
        // if (true) return true;
        // else return false;
      });
    });

    // board.setState({board: updatedBoard});

  }

  renderSquares() {
    // test
    this.updateBoard();
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
