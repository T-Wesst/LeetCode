// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

const isUnique = (arr) => arr.length === new Set(arr).size;