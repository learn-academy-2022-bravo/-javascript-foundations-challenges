// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // // --> [9, 27, 45, 12, 30]
//
// const mult3 = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     newArr.push(array[i] * 3)
//   }
//   return newArr
// }
// console.log(mult3(testArr1))
// // OUTPUT -->
// // [ 9, 27, 45, 12, 30 ]

// // Pseudo Code--
// // write out a function
// // write a variable with an empty array
// // create an iteration utilizing a for loop that takes in an array of numbers
// // .push () new array to multiply by 3
// // return newArray

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // --> [-7, 3, 5, 13]
//
// // // Pseudo Code--
// // write out a function
// // create an empty array - newArray
// // create an iteration utilizing a for loop
// // create if statement that includes modulo to determine whether numbers in our array are even or odd
// // .push() newArray
// // return newArray
//
// const onlyOdd = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     if(array[i] % 2 !==0){
//       newArr.push(array[i])
//     }
//   }
//   return newArr
// }
//
// console.log(onlyOdd(testArr2))
// OUTPUT -->
// [ -7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

const onlyString = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
      // newArr.typeof(array[i])
      newArr.join("")
    }
    return newArr
  }

console.log(onlyString(comboArr))
// Pseudo Code--
// write out a function
// create an empty array
// create an iteration utilizing a for loop
// create a new array that includes the typeOf method
// use .join() to convert array into a string
// return a string with only letters

// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10
//
// var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
