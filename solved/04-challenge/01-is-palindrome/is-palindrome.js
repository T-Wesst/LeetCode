const isPalindrome = function(str) {
  return checkAgain(str, 0, str.length - 1);
  // let reversedStr = str.split('').reverse().join('');
  // return reversedStr === str ? true : false;

  // let p1 = 0;
  // let p2 = str.length - 1;
  // while(p1 < p2){
  //   if(str[p1] !== str[p2]) return false;
  //   p1++;
  //   p2--;
  // }
  // return true;
};

function checkAgain(string, startIndex, endIndex){
  if(startIndex === endIndex) return true;
  if(string[startIndex] !== string[endIndex]) return false;
  if(startIndex < endIndex){
    startIndex++;
    endIndex--;
    return checkAgain(string, startIndex, endIndex);
  }
  return true;
}
