// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// // Expected Output--> [9, 27, 45, 12, 30]

//Create a function called mult3
//Create a new variable called numStorage to take in the new array
//Create a for loop to address the entire array
//Push modified string into numStorage
//Return outside of the loop
//Create console.log result

// const mult3 = (array) => {
//   let numStorage = []
//   for (let i = 0; i < array.length; i++){
//     numStorage.push(array[i] * 3)
//   }
//   return numStorage
// }
// console.log(mult3(testArr1))
// Actual Output: [ 9, 27, 45, 12, 30 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// //Expected Output --> [-7, 3, 5, 13]

//Create a function called oddNum
//Create anew variable called numStorage2 to take in new array
//Create a loop to go through entire array
//Creat a conditional using a modulo to identify the odd numbers
//Push modified string into numStorage2
//return outside of the loop
//Create console.log result

// const oddNum = (array2) => {
//   let numStorage2 = []
//   for (let i = 0; i < array2.length; i++){
//     if (array2[i] % 2 !== 0){
//     numStorage2.push(array2[i])
//     }
//   }
//   return numStorage2
// }
// console.log(oddNum(testArr2))
// Actual Output:[ -7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // // --> "nicework"
// //create a function taking an array and only outputting letters called bravo
// // create numStorage3
// //create a loop to identify only letters
// //utilize if statement with typeOf
// //push to variable numStorage3
// //retun numStorage3
// //create a console.log result
// const bravo = (words) => {
//     let numStorage3 = []
//     for(let i =0; i<words.length; i++){
//         if(typeof(words[i]) === "string"){
//             numStorage3.push(words[i])
//         }
//     }
//     return numStorage3.join("")
// }
// console.log(bravo(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// // --> 10
//
//create a function that takes in an array of numbers and returns the sum called numSum
//create a variable numSumTotal
//create a loop to address each number and adds it to numSumTotal
//return numSumTotal
//console.log numSumTotal

const numSum = (array4) => {
    let numSumTotal = [0]
    for(let i = 0; i < array4.length; i++){
     let numSumTemp = (numSumTotal[0] + array4[i])
       numSumTotal.unshift(numSumTemp)
       numSumTotal.pop()
    }
    return numSumTotal
}
console.log(numSum(addThese1))
var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
// STRETCH Challenges
//
// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]
//
// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10
//
// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55
//
// var addUp3 = 600
// // --> 180300
// EPIC Challenges
//
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
