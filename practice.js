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


// Repeat a given string

function repeatStringNumTimes(str, num) {
  if (num > 0 ) {
    return str * num
  } else {
    return '';
  }
}

console.log(repeatStringNumTimes("abc", 3));



function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
  num = arr[i];
  func(num) === true ? num : undefined
  num++
  
 
 
  }}
  


console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));





function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice()
  let arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr = arr1[i]
  }
  
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


function diffArray(arr1, arr2) {
  
  const mergedArray = arr1.concat(arr2)
  const newArr  = [...new Set(mergedArray)]
  

  
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

