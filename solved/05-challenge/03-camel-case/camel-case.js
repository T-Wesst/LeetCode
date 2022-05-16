// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  // convert the string to lowercase and split
  let lCaseStr = str.toLowerCase().split(" ");
  // cutout the first word
  let firstWords = lCaseStr.splice(0,1);
  // at each word capitalize the first character
  let capStr = lCaseStr.map(word => word[0].toUpperCase() + word.slice(1))
  // combine the results into a string
  return firstWords + capStr.join("");
};
