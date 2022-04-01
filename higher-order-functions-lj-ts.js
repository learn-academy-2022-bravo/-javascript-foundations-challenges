// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
//  var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

// create a function that will take in an array and return a new array
// use .map to multiply the input by 10
// input: [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

// let times10 = arr1.map(value => {
//     return value * 10
// })
// console.log("original array:", arr1)
// console.log("mapped array:", times10 )






// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Create a function - filterOdd
// use .filter with modulo to display odd numbers only
// input: [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

//  var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // --> [7, 3, 5, 13]
//  let filterOdd = arr2.filter(value => {
//      return value % 2 !==0
//  })
// console.log("original array:", arr2)
// console.log("filtered array:", filterOdd)



var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const stringOnly = comboArr.filter(value => {
    return typeof value == "string"
    return value.join("")
}) 

console.log("original array: ", comboArr)
console.log("filtered array: ", stringOnly)






// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

// Create a function - stringOnly
// Use typeof to isolate the letters from the input array
// Use .filter to return output
// .join("") to change the array output to string output
// input: [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const stringOnly = comboArr.filter(value => {
    return typeof value == "string"
}) 

console.log("original array: ", comboArr)
console.log("filtered array: ", stringOnly.join(""))





// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]


// Create a function - mixedData
// .filter the array input by specified values
// input: [58, " ", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

const mixedData = (array) => {
    return array.filter(value => {
        return value === true || value === "abcd" || value === 58
    })
}

console.log(mixedData(filterArrayValues))







// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"







// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]