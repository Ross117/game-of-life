
const createMatrix = (rows, cols) => {
    const randomInt = () => { return Math.round(Math.random()) }
    let matrix = []

    if ((rows < 10 || rows > 100) || (cols < 10 || cols > 100)) {
      throw "parameters passed either too big or too small"
    }

    for (let i = 1; i <= rows; i++) {
      let row = []
      for (let j = 1; j <= cols; j++) {
        row.push(Boolean(randomInt()))
      }
      matrix.push(row)
    }

    return matrix
}

export default createMatrix;

