const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const activeNodesAdjacent = (squareCoordinate, matrix) => {
  return validAdjacentNodes(squareCoordinate, matrix)
          .map(adjacentNodeCoorinate => {
            const [x, y] = adjacentNodeCoorinate;
            return matrix[x][y]
          })
          .filter(i => i).length;
}

const validAdjacentNodes = (node, matrix) => {

 const length = matrix.length; 
  const [xNode, yNode] = node;

  const nodeOffsets = [
    [-1, -1], [0,-1], [1,-1],
     [-1, 0],          [1, 0],
      [-1, 1], [0,1],   [1, 1]
  ];
 
  const applyOffsets = nodeOffsets.map(offSet =>{
    let [x,y] = offSet;
   let xAbsolute = x + xNode;
   let yAbsolute = y + yNode;
   return xAbsolute >= 0 && xAbsolute < length-1 && yAbsolute >= 0 && yAbsolute < length-1 ? [xAbsolute, yAbsolute] : false;
   })
 
  return applyOffsets.filter(i => i)
  }


export {
  activeNodesAdjacent,
  aliveOrDead,
  validAdjacentNodes,
}