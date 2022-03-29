// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.




// var myArr1 = [3, 9, 15, 4, 10]

// const mult3 = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     newArr.push(array[i] * 3)
//   }
//   return newArr
// }
// console.log(mult3(myArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// var myArr1 = [0, 2, -7, 3, 5, 8, 10, 13]

// const oddArray = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     if(array[i] % 2 !== 0)
//     newArr.push(array[i])
//   }
//   return newArr
// }
// console.log(oddArray(myArr1))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// let myArr1 = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// const lettersOnly = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     if(typeof array[i] !== false )
//     newArr.push(array[i])
//   }
//   return newArr 
// }
// console.log(lettersOnly(myArr1))

// let myArr1 = [0, 2, -7, 3, 5, 8, 10, 13]

// let myArr1 = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

//  const lettersOnly = (array) =>{
//     let newArray = []
//  for(let i = 0; i < array.length; i++){
//      if(typeof array[i] == "string") 
//      {
//          newArray.push(array[i])
//      }
//     }
//     return newArray.join("") 
// }
// console.log(lettersOnly(myArr1))

//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

// const multipliedArray = (array) => {
//     return array.map(value => value * 3)
// }

// console.log(multipliedArray(arr1))

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

// const onlyOdd = (array) => {
//     return array.filter(value => value % 2 !== 0)
// }
// console.log(onlyOdd(arr2))

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"


// const onlyLetters = (array, dataType) => {
//     return array.filter(value => typeof value === dataType).join("")
//     } 
// console.log(onlyLetters(comboArr, "string"))

//Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// --> [58, "abcd", true]

const filteredArray = (array) => {
    array = array.filter(properDataType)
    return array 
    }
  
  
  const properDataType = (value) => {
     if (value !== false || value !== null || value !== 0 || value !== "") {
      return value
    }
  }
  
  console.log(filteredArray(filterArrayValues))