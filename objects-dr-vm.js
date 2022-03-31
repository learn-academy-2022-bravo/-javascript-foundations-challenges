// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.

// console.log(person.firstName)


// Write the code that accesses the last name of the person object.

// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// let person = {homePlanet: "Earth"}

// console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// const person = {homePlanet: "Earth",
//   firstName: "Arthur  ",
//   lastName: "Dent  ",
//   introduction: function() {
//       return this.firstName + this.lastName + "is from " + this.homePlanet
//   }
// }
// console.log(person.introduction())



// Consider this variable:

// let product = {
//   name: "chair",
//   price: 24.99
// }
// let product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// let describeProduct = (product) => {
// return "The product is a" + '${product.name}'  + "it costs" + '${product.price}'
// }

// let product = {
//     name: "chair",
//     price: 24.99
//   }
// // const describeProduct = (product) => {
// // return `The product is a   ${product.name}  it costs   ${product.price}`
// // }
// // console.log(describeProduct(product))

// // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const totalWithTax = (product) => {
//     // return product.price *1.07
//     return Math.floor(product.price *1.07).toPrecision(4)
// }
// console.log(totalWithTax(product))


// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.

// console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//   let bananaSandwich = (lunch) => {
//     return `The ingredients for a PB and Banana sandwich are  ${lunch.ingedients[0]},   ${lunch.ingedients[1]},   ${lunch.ingedients[2]}`
//   }

let bananaSandwich = (lunch) => {
        return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, ${lunch.ingredients[2]}`
}
console.log(bananaSandwich(lunch))


// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// const justCats = (array) =>{
//   return array.filter(obj => 
//     obj.type === "cat"
//   )
// }
// console.log(justCats(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const justNames = (array) =>{
  return array.map(obj => 
    obj.name 
  )
}
console.log(justNames(animals))



// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.



const justOld = (array) =>{
  newArray = array.filter(obj => obj.age > 10)
  return newArray.map(obj => obj.name)
}

console.log(justOld(animals))


// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.


// const animalIntro = (array) =>{
//   //return `This is ${animals.name} they are a ${animals.type} and are  ${animals.age} years old`
//   return array.map(obj =>
//      `My name is ${obj.name} I am a ${obj.type} I am ${obj.age}`

//   )
// }

//stuck ?

// const justIntro = (array) =>{
//   newArray = array.filter(obj => obj.name)
//   return `My name is ${obj.name} I am a ${obj.type} I am ${obj.age}`
// }

// console.log(justIntro(animals))










 
// console.log(animalIntro(animals))

console.log("----------------------------------------------------")


const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully: 

console.log(`${author.name} is a ${author.genre} author`)


// Output: "H. G. Wells is a science fiction author"
// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}


// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// const describePokemon = (array) =>{
//   return array.map(obj =>
//     `${obj.species} is a ${obj.pokemon_type}`)

// }

// console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// Consider this variable:

// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charl