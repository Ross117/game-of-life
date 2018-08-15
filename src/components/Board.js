import React, { Component } from 'react'
import { css } from 'emotion'
import shortid from 'shortid'
import { activeNodesAdjacent, aliveOrDead } from '../utils/matrix'
import Square from './Square'

const boardStyle = css`
  width: calc(1000px - 20px);
  height: calc(1000px - 20px);
  margin: auto;
  border: 2px solid black;
`

const nextGeneration = ( board ) => {
  return board.map((horizontalArray, xCoordinate) => {
    return horizontalArray.map((_, yCoordinate) => {
      return aliveOrDead(activeNodesAdjacent([xCoordinate, yCoordinate], board))
    })
  })
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "board": this.props.matrix,
    };
    this.renderMatrix = this.renderMatrix.bind(this)
    this.interval = this.interval.bind(this)
  }

  renderMatrix(){
    const board = this.state.board
    return board.map((x, primary_index) => {
      return x.map((activeNode, secondary_index) => {
        const key = shortid.generate()
        return (
          <Square active={activeNode} key={key} />)
      })
    })
  }
  interval(){
    const nextBoard = nextGeneration(this.state.board)
    this.setState({ board: nextBoard })
  }
  componentDidMount(){
    this.intervalId = setInterval(this.interval, 2000)
  }
  render() {
    return (
      <div className={boardStyle}>
        { this.renderMatrix() }
      </div>
    );
  }
}

export default Board;
