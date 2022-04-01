// 1. Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// ```javascript
// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]
// ```

//create a function called mult10
//create parameter called array
//use map filter to address all numbers in array
//return the array *10
//console.log result
// var arr1 = [3, 9, 15, 4, 10]
// const mult10 = arr1.map (value => {
//     return value * 10
// }
// )
// console.log("mapped array:", mult10)
//mapped array: [ 30, 90, 150, 40, 100 ]

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// ```javascript
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]
// ```
// create a function called oddNum
// utilize .filter method
// create parameter array2
// utilize % to return odd number
//console.log

// var arr2 = [2, 7, 3, 5, 8, 10, 13]

// const oddNum = arr2.filter(value =>{
//     return value % 2 !== 0
// }
// )
// console.log("Filter array", oddNum)
// Filter array [ 7, 3, 5, 13 ]

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** Use [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) method

// ```javascript
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
// ```
//create function called getLet
//create parameter comboArr
//utilize typeof method to identify strings
//utilize .filter method
//return strings
//console.log
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const getLet = (array, dataType) => {
//     return array.filter(value => {
//         return typeof value === dataType
//     })
// }
//   console.log(getLet(comboArr, "string").join(""))

// 4. Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// ```javascript
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// ```
//create function named truTru
// utilize .filter method
// return elements without (false, null, 0, or blank values)
//utilize || <-or statement to identify ^
//console.log
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
//
// const truTru = filterArrayValues.filter(value => {
//     return value !== " " && value !== 0 && value !== false && value !== null
// })
//
// console.log("Filtered array", truTru)


// string no blank strings              done
// number we want all numbers but 0     done
// boolean  we only want true           done
// undefined possibly for null          done

// **STRETCH Challenges**

// 1. Create a function that takes in a string and returns a new string with all the vowels removed.

// ```javascript
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// ```
//Create a function called notVowels
//Create a parameter called string
//Identify each element, use an iteration
//Utilize .filter method
//Return string without vowels
//Console.log result

const str = "javascript is awesome"

const notVowels = str.replace(/[aeiou]/gi, '')

console.log(notVowels)

// 2. Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// ```javascript
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// ```
