// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//  var testArr1 = [3, 9, 15, 4, 10]
//  const mult = (array) => {
//      let newArray = []
//      for(let i = 0; i < array.length; i++){
//          newArray.push(array[i]*3)
//      }
//      return newArray
//  }
//  console.log(mult(testArr1))
// // --> [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
 var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
 const oddArray = (array) =>{
    let newArray = []
 for(let i = 0; i < testArr2.length; i++){
     if(testArr2[i] % 2 == 1){
         newArray.push(testArr2[i])
     }
    }
}
console.log(oddArray(testArr2))
// // --> [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"
// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10

// var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1