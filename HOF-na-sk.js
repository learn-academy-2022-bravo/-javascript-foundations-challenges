// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.
//
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

//For Loop Version
//let newArray = [];
//for(let i=0; i<arr.length; i++){
//  let valueTimesTen = myArray[i] * 10;
//  console.log(valueTimesTen);
//  newArray.push(valueTimesTen);
//}
//console.log(newArray);


//create a function
// takes and array of numbers
//returns array of numbers * 10

// var arr1 = [3, 9, 15, 4, 10]
// const multiplier = (array)=> {
//     return array.map(value => value * 10)
// }
// console.log(multiplier(arr1))
// Output=[ 30, 90, 150, 40, 100 ]
//These were mulitiplied by 10 in the array



//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // --> [7, 3, 5, 13]


// // Create a function - oddNums
// // Parameter - array
// // Look at every item in the array, iteration
// // Make a decision about every item in the array - filter
// // Decide if the value is odd and return the value

// const oddNums = (array) => {
//     return array.filter((value,num) =>{
//         return value % 2 !== 0
//     })
// }
// console.log(oddNums([2, 7, 3, 5, 8, 10, 13]));
// Output: [ 7, 3, 5, 13 ]



//Write a function that takes in an array of numbers and letters and returns a string with only the letters.
//HINT: Use typeof method
//var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"

//create a function-nice
//function takes in array of numbers
//function takes in array of letters
//returns a string with only letter

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const nice = (array, string => {
    return array.filter(value => {
	return typeof value === string;
})
}
console.log(nice typeof 'string')


//console.log(typeof 'blubber');
//
// console.log(typeof true);
// // expected output: "boolean"
//
// console.log(typeof undeclaredVariable);
// // expected output: "undefined"








// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// STRETCH Challenges
//
// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
