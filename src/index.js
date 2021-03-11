module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0) {
    return []
  }
  let arr = []; let key = true;
  for(let i of matrix)
  {
    if(key){
      for(let j = 0; j < i.length; j++)
      {
        arr.push(i[j]);
        key = false;
      }
    }
    else {
      for(let j = i.length-1; j >= 0; j--)
      {
        arr.push(i[j]);
        key = true;
      }
    }
  }
  return arr;
}
