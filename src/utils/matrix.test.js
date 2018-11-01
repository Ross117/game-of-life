import { validAdjacentNodes } from "./matrix";


describe('activeNodesAdjacent', () => {

    const matrix = [
        [true, false, false],
        [false, true, false],
        [false, false, true]
      ];

      const squareCoordinate = [0,0];

    it('can call validAdjacentNodes', () => {
        validAdjacentNodes(squareCoordinate, matrix);
    });
    
    it('returns Array(3) when [0,0] passed in', () => {
        expect(validAdjacentNodes(squareCoordinate, matrix)).toEqual([[1, 0], [0,1], [1,1]]);
    })

    it('returns Array(8) when [1,1] passed in', () => {
        expect(validAdjacentNodes([1,1], matrix)).toEqual([[0, 0], [1,0], [2,0], [0,1], [2,1], [0,2], [1,2], [2,2]])
    })

    it('returns Array(3) when [2,2] passed in', () => {
        expect(validAdjacentNodes([2,2], matrix)).toEqual([[1, 1], [2,1], [1,2]]);
    })
});
