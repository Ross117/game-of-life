import { arraysIdentical, flatten } from './arrays'

const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const nodeActive = (coordinates, matrix) => {
  const [xCoordinate, yCoordinate] = coordinates
  return matrix[xCoordinate] && matrix[xCoordinate][yCoordinate] ? matrix[xCoordinate][yCoordinate] : false
}

const findActiveNodes = (matrix) => {
  const activeNodeCollection = []
  matrix.map((horizontalArray, xAxis) =>
    horizontalArray.map((elementActive, yAxis) => {
      if (elementActive) activeNodeCollection.push([xAxis, yAxis])
    }))
  return activeNodeCollection
}

const adjacentCoordinates = (node) => {
  const [xCoordinate, yCoordinate] = node
  let xAxis = NaN
  let yAxis = NaN
  let adjacentX = -1
  const adjacentNodeCombinations = Array(3).fill(Array(3).fill([NaN, NaN]))
    .map((horizontalArray, xIndex) => {
      xAxis = xCoordinate + xIndex - 1
      return horizontalArray.map((_, yIndex) => {
        yAxis = yCoordinate + yIndex - 1
        return [xAxis, yAxis]
      })
    })
  return adjacentNodeCombinations.map((horizontalArray, xIndex) => {
    return horizontalArray.filter(coordinate => {
      return arraysIdentical(coordinate, node) ? false : coordinate
    })
  })
}

const activeNodesAdjacent = (node, matrix) => {
  const adjacentElements = adjacentCoordinates(node).map((horizontalArray, xIndex) => {
    return horizontalArray
      .map((coordinate, yIndex) => {
        return nodeActive(coordinate, matrix)
      })
  })
  return flatten(adjacentElements).filter(x => x).length
}

export {
  activeNodesAdjacent,
  adjacentCoordinates,
  aliveOrDead,
  nodeActive,
  findActiveNodes,
}