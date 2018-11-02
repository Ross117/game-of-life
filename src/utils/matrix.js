const aliveOrDead = (neighbours) => { return !(neighbours < 2) && !(neighbours > 3)}

const activeNodesAdjacent = (node, matrix) => {debugger

 const length = matrix.length; 
  const [xNode, yNode] = node;

  const nodeOffsets = [
    [-1, -1], [0,-1], [1,-1],
     [-1, 0],          [1, 0],
      [-1, 1], [0,1],   [1, 1]
  ];
 
  const applyOffsets = nodeOffsets.map(offSet =>{debugger
    let [x,y] = offSet;
   let xAbsolute = x + xNode;
   let yAbsolute = y + yNode;
   return xAbsolute >= 0 && xAbsolute < length && yAbsolute >= 0 && yAbsolute < length ? matrix[xAbsolute][yAbsolute] : false;
   })
 
  return applyOffsets.filter(i => i).length
  }


export {
  activeNodesAdjacent,
  aliveOrDead,
}