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




// JavaScript Higher-Order Functions

// Built in methods - .push(), code snippets that is given a name and added to the javascript language.
// 'hello'.toUpperCase()
// 'HELLO'
// 'hello'.charAr(2)
//'l'

//Syntatical sugar - a piece of code created to make language sweeter

// error message: .toUpperCase in not a function - look at what the method is being called on.

// - Functions - reusable code machines 
// encapsulation scope is defnied by executable bloccks of code.
// Parameters- varable that belgons to the function
// Argumetns - data that is assinged to the parameted 

// const myFuncton = (parameter) =>{
//     stuff in here is function scope
//     i can reference a parameter in here
// }
// myFunction ("hello, i am an argument")


// - iteration - the process of perfroming an action a number of times until a condition is met 

// ineration data types - arrays, arrays are collections of things we can do something to every iem or make a decsion about everytime


// Higher Order Functions - subcatagory of built in methods usef for iteration 

// HOF are called on arrays

// .forEach()
// [2, 3, 4, 5].forEach(value is the parameter)



// [2, 3, 4, 5].forEach((apple, banna, peach) =>{
// console.log("value:", apple)
// console.log("index:", banna)
// console.log("array:", peach)
// })

//.map() - HOF, takes a function as an agrument, acts on arrays, iterates, map returns an array. does something to everyy item

// const myArray = [2, 3, 4, 5, 6, 7]
    
// let myMappedContent = myArray.map(value =>{
//     return value * 2
// })
// console.log("origional array:", myArray );
// console.log("mapped array:", myMappedContent );
// map needs a return if you see undefined 


//.filter() HOF - takes a function as an argument, acts on arrays, iterates, returns an array. makes a decision about every item, return a subset.

// const myArray = [2, 3, 4, 5, 6, 7]

// let myFilterContent = myArray.filter(value => {
//     return value % 2 !== 0
// })
// console.log("origional array:", myArray );
// console.log("mapped array:", myFilterContent );


function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== '') {
      return value;
    }
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
  
  