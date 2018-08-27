
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
      "board": this.props.initialMatrix,
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


checkLife(){
  for (let i = 0; i =< this.rowCount; i++){
    for (let j = 0; j =< this.squareCount; j++){
      if (j){
        j = this.countNeighbors(i, j)
      }
    }
  }
}
  render() {
    return (
      <div className={boardStyle}>
        { this.renderMatrix() }
      </div>

    );
  }
}

const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const nodeActive = (coordinates, matrix) => {
  const [xCoordinate, yCoordinate] = coordinates
  return matrix[xCoordinate] && matrix[xCoordinate][yCoordinate] ? matrix[xCoordinate][yCoordinate] : false
}

const adjacentCoordinates = (node) => {
  const [xNode, yNode] = node
 
 const relativeAdjacentCoordinates = [
   [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
     [1,-1], [1,0],   [1,1]
 ];

 const absoluteCoordinates = relativeAdjacentCoordinates.map(relative =>{
   let [x,y] = relative;
  let xAbsolute = x + xNode
  let yAbsolute = y + yNode 
  return xAbsolute >= 0 && yAbsolute >= 0 ? [xAbsolute, yAbsolute] : false;

  })

 return absoluteCoordinates.filter(i => i)
 }

const activeNodesAdjacent = (node, matrix) => {
  return adjacentCoordinates(node).map(i => nodeActive(i, matrix));
}

export default Board;
