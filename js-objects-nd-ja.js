// Challenges
// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   where: function(){
//       return "Arthur Dent is from Earth"
//   }
//}
// Write the code that accesses the first name of the person object.

//console.log(person.firstName)

// Write the code that accesses the last name of the person object.
//console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
//console.log(person.where())

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const product = {
//     name: "chair",
//     price: 24.99,
//     describeProduct: function(){
//     return `The product is a ${this.name}. It costs ${this.price}`
// }
// }
// console.log(product.describeProduct())
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const product = {
//     name: "chair",
//     price: 24.99,
//     tax: .07,
//     describeProduct: function(){
//     return ((this.price * this.tax) + this.price).toFixed(2)
// }
// }
// console.log(product.describeProduct())


// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.

// console.log(lunch.ingredients())

// Write the code that access the third ingredient of the lunch object.

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//
// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
//
// const makeLunch = () => {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients}`
// }
// console.log(makeLunch(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//   str : function () {
//     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
//   }
// }
// console.log(lunch.str())


// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
//Create a function

//Expected Output: array with

// const onlyCats = animals.filter(value => value.type === "cat")
// console.log(onlyCats)


// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

// const petNames = (array) => {
//   return array.map(obj => {
//     return obj.name
//   })
// }
// console.log(petNames(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

// const petAge = animals.filter(value => value.age > 10)
// console.log(petAge)

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// const animalFacts = animals.map (animal => {
//   return `The ${animal.type} named ${animal.name} and is ${animal.age} years old`
// })
// console.log(animalFacts)


// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// const {name, genre} = author




//  console.log(`${author.name} is a ${author.genre} author`)
// // Output: "H. G. Wells is a science fiction author"




// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// const {species, pokemon_type} = pokeOne
// const describePokemon = () => {
//     return `${species} is ${pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeOne))
// Output: "Charmandar is a Fire pokemon"

// const {species, pokemon_type} = pokeTwo
// const describePokemon = () => {
//     return `${species} is ${pokemon_type} pokemon`
// }

// console.log(describePokemon(pokeTwo))

// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// Consider this variable:



// const triangleDimensions = {
//   base: 2,
//   height: 5,
//   area: function () {
//       return (this.base * this.height) * .5
//   }
// }
// console.log(triangleDimensions.area())
// Modify the triangleDimensions object to have a method that returns the area of the triangle.

// Write the code that will update the base to be the value of 6.


// const newDimension = triangleDimensions.map (obj => {
//     if (obj.base === 2) {
//         return {...obj, base: 6}
//     }
//     return obj;
// })
// console.log(newDimension)



// Consider this variable:

let learn = {
  cohorts: {
    cohort1: ["Alpha", "Zulu", "Charlie", "Delta", "Echo"],
    cohort2: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
  }
}
// Write the code that logs the name of your cohort.


// Write the code that uses destructuring to log the name of your cohort.
// let { cohort1, cohort2 } = learn.cohorts
// console.log(cohort2[1])
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
const propertyNames = Object.values(learn);

console.log(propertyNames);

// const animalFacts = animals.map (animal => {
//   return `The ${animal.type} named ${animal.name} and is ${animal.age} years old`
// })
// console.log(animalFacts)