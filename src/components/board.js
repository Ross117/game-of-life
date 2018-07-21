import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  constructor(props) {
    super(props);

  }

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
