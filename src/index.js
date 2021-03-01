
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0) return [];
  let flatten = matrix.reduce(function(merged, arr, index){ 
    return merged.concat(arr.sort((a, b) => (index % 2 == 0)?(a - b):(b-a)))
  });
  return flatten;
}
