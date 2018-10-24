
const createMatrix = (rows, cols) => {
    const randomInt = () => { return Math.round(Math.random()) }

    if ((rows < 10 || rows > 100) || (cols < 10 || cols > 100)) {
      throw "arguments passed either too big or too small"
    }

    const matrix = Array(rows)
      .fill(Array(cols)
      // need to create a placeholder 3rd dimension of the array, so that the 2nd dimension is mappable and not just empty slots
      .fill(Array(1)))
      .map( (r) => {
        return r.map( () => {
          return Boolean(randomInt());
        })
      })

    return matrix
}

export default createMatrix;

