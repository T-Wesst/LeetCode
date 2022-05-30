// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

const isAnagram = (strA, strB) => {
    return splitAndSort(strA) === splitAndSort(strB);
}

function splitAndSort(str){
    return str.split('').sort().join('');
}