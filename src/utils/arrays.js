const arraysIdentical = (array, match) => {
  return array.map((x, i) => match[i] === x).every(x => x === true)
}
const flatten = (array) => {
  const flatArray = [].concat(...array);
  return flatArray.some(Array.isArray) ? flatten(flatArray) : flatArray;
}

export {
  flatten,
  arraysIdentical,
}