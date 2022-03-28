// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// let myMappedContent = arr1.map(value => {
//     return value * 10
// })

// console.log(myMappedContent)


// // --> [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

// let myFilteredContent = arr2.filter(value => {
//     return value % 2 !== 0
// })
// console.log(myFilteredContent)



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
//  const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // --> "nicework"

// const sifter = (array, dataType) => {
//     return array.filter(value => {
//         return typeof value === dataType 
//     })
// }
// console.log(sifter(comboArr,"string"))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
 const filterArrayValues = [58, "", "abcd", true, null, false, 0]

const sifter = (value) => {
    return value.filter(value => {
        if (value !== false ||  value !== null || value !== "" || value !== 0) {
            return value
        } 
    })
}
console.log(sifter(filterArrayValues))
// // --> [58, "abcd", true]
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"
// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]