import { validAdjacentNodes } from "./matrix";


describe('activeNodesAdjacent', () => {

    const matrix = [
        [true, false, false],
        [false, true, false],
        [false, false, true]
      ];
    
      const squareCoordinate = [0,0];

    it('can call validAdjacentNodes', () => {
        validAdjacentNodes(squareCoordinate);
    });
    
    it('returns Array(3) when [0,0] passed in', () => {
        expect(validAdjacentNodes(squareCoordinate)).toEqual([[1, 0], [0,1], [1,1]]);
    })
});
