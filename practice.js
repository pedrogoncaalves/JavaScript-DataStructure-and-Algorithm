// Reversing String

function reverseString(str) {
    return str.split('').reverse().join('')
  }
  
  console.log(reverseString("hello"));

// Find Longest Word


function findLongestWordLength(str) {
    return str.split(' ')
  }
  
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

 // Finding largest numbers in array of arrays

 
 function largestOfFour(arr) {
  
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i]
    newArray.push(Math.max(...currentArray))

  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);