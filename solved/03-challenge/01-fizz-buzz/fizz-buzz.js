const fizzBuzz = function(arr) {
  for(let index = 0; index < arr.length; index++){
    let current = arr[index];
    if(current % 15 === 0){
      console.log('Fizz Buzz')
    } else if(current % 3 === 0){
      console.log('Fizz')
    } else if(current % 5 === 0){
      console.log('Buzz')
    } else {
      console.log(current)
    }
  }
};