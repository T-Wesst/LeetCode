// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function(nums){
  let max1 = Math.max(...nums);
  nums.splice(nums.indexOf(max1), 1);
  let max2 = Math.max(...nums);
  return max1 * max2
};
