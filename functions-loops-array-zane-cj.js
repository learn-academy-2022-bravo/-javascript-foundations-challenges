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

let myArr1 = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

 const lettersOnly = (array) =>{
    let newArray = []
 for(let i = 0; i < array.length; i++){
     if(typeof array[i] == "string") 
     {
         newArray.push(array[i])
     }
    }
    return newArray.join("") 
}
console.log(lettersOnly(myArr1))
