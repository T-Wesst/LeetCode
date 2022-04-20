const characterCount = function(str) {
let obj = {};
let arrStr = str.split('');
arrStr.forEach(char => obj[char] ? obj[char]++ : obj[char] = 1)
return obj;
};
