// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
const multArray = (array) => {
    return array.map(value => {
        return value * 10
    }) 
}
console.log(multArray(arr1))
// // --> [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
const oddArray = (array) => {
    return array.filter(value  => {
        return value % 2 !== 0
    })
}
console.log(oddArray(arr2))
// // --> [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
 const lettersOnly = (array, dataType) => {
     return array.filter(value => {
         return typeof value === dataType
     })
 }
 console.log(lettersOnly(comboArr, "string").join(""))
// // --> "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
 var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
const returnArray = (array) => {
    let filtered = filterArrayValues.filter(value => {
        return value !== false && value !== 0 && value !== null && value !== " "
      })
      
      console.log(filtered)
    }
    console.log(returnArray(filterArrayValues))

// // --> [58, "abcd", true]