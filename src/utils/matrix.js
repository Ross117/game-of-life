98
const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const nodeActive = (node) => {
 
  const [xNode, yNode] = node;

  const adjacentNodesOffsets = [
    [-1, -1], [-1, 0], [-1, 1],
     [0, -1],          [0, 1],
      [1,-1], [1,0],   [1,1]
  ];
 
  const appplyOffsets = adjacentNodesOffsets.map(offSet =>{
    let [x,y] = offSet;
   let xAbsolute = x + xNode;
   let yAbsolute = y + yNode ;
   return xAbsolute >= 0 && yAbsolute >= 0 ? [xAbsolute, yAbsolute] : false;
   })
 
  return appplyOffsets.filter(i => i)
  }

const activeNodesAdjacent = (node, matrix) => {
  return adjacentCoordinates(node).map(i => nodeActive(i, matrix));
}

export {
  activeNodesAdjacent,
  adjacentCoordinates,
  aliveOrDead,
  nodeActive,
}