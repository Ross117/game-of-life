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

export {
  activeNodesAdjacent,
  adjacentCoordinates,
  aliveOrDead,
  nodeActive,
  findActiveNodes,
}