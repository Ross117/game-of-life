import React, { Component } from 'react'
import { css } from 'emotion'
import shortid from 'shortid'
import Square from './Square'

const boardStyle = css`
  width: calc(400px - 8px);
  height: calc(400px - 8px);
  margin: auto;
  border: 2px solid black;
`

const containSameElements = (array, match) => {
  return array.map((x, i) => match[i] === x ).every(x => x === true)
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "board": this.props.matrix
    };
    this.renderMatrix = this.renderMatrix.bind(this)
  }

  renderMatrix(){
    const board = this.state.board
    return board.map( (x, primary_index) => {
      return x.map((x, secondary_index) => {
        const key = shortid.generate()
        if(x){
          return (
            <Square 
              first={primary_index} 
              second={secondary_index} 
              active={x}
              key={key}
            /> 
          )
        }
        return (
          <Square 
            first={primary_index} 
            second={secondary_index}
            key={key}
            />)
      }
    )
    })
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
