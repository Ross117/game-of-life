import React, { Component } from 'react'
import Board from './components/Board'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      "initialMatrix": this.createMatrix(10, 10)
    }
  }

  createMatrix(numberOfRows, numberOfColumns) {
    const randomInt = () => { return Math.round(Math.random()); }
    let matrix = []

    for (let i = 1; i <= numberOfRows; i++) {
      let row = []
      for (let j = 1; j <= numberOfColumns; j++) {
        row.push(Boolean(randomInt()))
      }
      matrix.push(row)
    }

    return matrix
  }

  render() {
    return (
      <div className="board">
        <Board initialMatrix={this.state.initialMatrix} />
      </div>
    )
  }
}

export default App;
