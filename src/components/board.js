import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "board": [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }

  // put in component did mount event?
  // createStateArray() {
  //   this.setState({board: [1, 2, 3, 4, 5, 6, 7, 8, 9]});
  // }

  renderSquares() {
    return this.state.board.map( (val) => {
      return <Square />;
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
