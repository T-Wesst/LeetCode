const titleCase = function(str) {
  let capStr = [];
  str.split(' ').forEach(word => {
    capStr.push(word[0].toUpperCase() + word.slice(1));
  })
  return capStr.join(' ');
};
