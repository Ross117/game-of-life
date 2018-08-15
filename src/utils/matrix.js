import { arraysIdentical, flatten } from './arrays'

const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const nodeActive = (node, matrix) => {
  const [coordX, coordY] = node
  return matrix[coordX] && matrix[coordX][coordY] ? matrix[coordX][coordY] : false
}

const adjacentCoordinates = (node) => {
  const [coordX, coordY] = node
  const adjacentNodeCombinations = [
    [[NaN, NaN], [NaN, NaN], [NaN, NaN],],
    [[NaN, NaN], [NaN, NaN], [NaN, NaN],],
    [[NaN, NaN], [NaN, NaN], [NaN, NaN],],
  ]
    .map((horizontalArray, axisX) => {
      return horizontalArray.map((_, axisY) => {
        const adjacentCoordX = coordX + axisX - 1
        const adjacentCoordY = coordY + axisY - 1
        const centralCoordinate = adjacentCoordX === coordX && adjacentCoordY === coordY 
        return centralCoordinate
          ? [false, false]
          : [adjacentCoordX, adjacentCoordY]
      })
    })
  return adjacentNodeCombinations
}

const activeNodesAdjacent = (node, matrix) => {
  const activeNodeMatrix = adjacentCoordinates(node).map((horizontalArray) => {
    return horizontalArray
      .map((node) => {
        return nodeActive(node, matrix)
      })
  })
  return flatten(activeNodeMatrix).filter(x => x).length
}

export {
  activeNodesAdjacent,
  adjacentCoordinates,
  aliveOrDead,
  nodeActive,
}