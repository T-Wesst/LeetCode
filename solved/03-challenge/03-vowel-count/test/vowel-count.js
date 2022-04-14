const vowelCount = function(str) {
  let vowels = 'aeiou';
  let vowelCount = 0;
  for(let index = 0; index < str.length; index++){
    let currentChar = str[index];
    if(vowels.includes(currentChar.toLowerCase())) vowelCount++;
  }
  return vowelCount;
};