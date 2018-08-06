import React, { Component, Fragment } from 'react'
import Board from './components/Board'
import { activeNodesAdjacent } from './utils/matrix'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      matrix: [
        [false, true, false, false],
        [false, true, false, false],
        [false, true, true, false],
        [false, true, false, false],
      ]
    }
  }
  render() {
    const [coordinateX, coordinateY] = [2,1]
    const matrix = this.state.matrix
    console.log(activeNodesAdjacent([3, 0], matrix))
    return (
      <Fragment>
        <Board matrix={matrix}/>
      </Fragment>
    );
  }
}

export default App;
