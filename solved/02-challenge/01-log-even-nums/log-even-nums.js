// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

const logEvenNums = (num) => {
    for(let count = 0; count <= num; count++){
        if(count % 2 === 0) console.log(count)
    }
}
