import React, { Component, Fragment } from 'react'
import Board from './components/Board'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      matrix: [
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, true, true, false, false, false, false, false, false,],
        [false, false, true, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
      ]
    }
  }
  render() {
    const [coordinateX, coordinateY] = [2,1]
    const matrix = this.state.matrix;
    return (
      <Fragment>
        <Board matrix={matrix}/>
      </Fragment>
    );
  }
}

export default App;
