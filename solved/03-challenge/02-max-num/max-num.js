const maxNum = function(arr) {
  let largest = 0;
  arr.forEach(number => {
    if(number > largest) largest = number;
  })
  return largest;
};