const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const activeNodesAdjacent = (squareCoordinate, matrix) => {debugger
  return validAdjacentNodes(squareCoordinate)
          .map(adjacentNodeCoorinate => {
            const [x, y] = adjacentNodeCoorinate;
            return matrix[x][y]
          })
          .filter(i => i);
}

const validAdjacentNodes = (node) => {
 
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
   return xAbsolute >= 0 && yAbsolute >= 0 ? [xAbsolute, yAbsolute] : false;
   })
 
  return applyOffsets.filter(i => i)
  }


export {
  activeNodesAdjacent,
  aliveOrDead,
  validAdjacentNodes,
}