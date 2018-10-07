import { validAdjacentNodes } from "./matrix";

const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, true]
  ];

  const squareCoordinate = [0,0]


describe('activeNodesAdjacent', () => {
    it('can call validAdjacentNodes', () => {
        validAdjacentNodes(squareCoordinate);
    })
});
