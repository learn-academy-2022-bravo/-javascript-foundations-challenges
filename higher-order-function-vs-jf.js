// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]
// //Pseudo Code:
// //Write a function with array as parameter
// //return array with .map and multiply it by 10
//
//
// const multiplier = (array) => {
//   return array.map(value => value * 10)
// }
// console.log(multiplier(arr1))
// [ 30, 90, 150, 40, 100 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // --> [7, 3, 5, 13]
// //
// //Pseudo Code:
// // //Write a function with array as parameter
// // Return an array with the .filter and %
//
// const onlyOdd = (array) => {
//   return array.filter(value => value % 2 !== 0)
// }
//
// console.log(onlyOdd(arr2))
// [ 7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
//
//seudo Code:
// Write a function with array as parameter
//

const letters = (array) => {
  let words = array.filter(value => {
    return typeof(value) === "string"
  })
  return words.join("")
}
console.log(letters(comboArr))






// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

const sifter = (array, dataType1, dataType2) => {
  return array.filter(value => {
    return typeof value === dataType1 || typeof value === dataType2
  })
}
console.log(sifter(mixedData1, "string", "null"))
