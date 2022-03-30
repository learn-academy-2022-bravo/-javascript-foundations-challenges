// ### Challenges
//
// **Consider this variable:**
//
// ```javascript
// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// // ```
// // - Write the code that accesses the first name of the person object.
// // - Write the code that accesses the last name of the person object.
// // - Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// // - Update the person object with a method that logs "Arthur Dent is from planet Earth".
//
// console.log(person.firstName)
// console.log(person.lastName)
//
// person.homePlanet = "Earth";
// console.log(person)
//
// person.fullSentence = function() {
//   return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
// }
//
// console.log(person.fullSentence())







// // **Consider this variable:**
// //
// // ```javascript
// const product = {
//   name: "chair",
//   price: 24.99
// }
// // ```
// // - Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// // - Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
//
// const describeProduct = function() {
//   return `This product is a ${product.name}. It costs $${product.price}.`
// }
// console.log(describeProduct());
//
//
// const totalWithTax = function() {
//   product.priceTax = product.price * 1.07
//   return `This product is a ${product.name}. It costs $${product.priceTax.toFixed(2)}.`
// }
// console.log(describeProduct());
//
// console.log(totalWithTax());





// **Consider this variable:**
//
// ```javascript
// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// ```
// - Write the code that accesses the ingredients property.
// - Write the code that access the third ingredient of the lunch object.
// - Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// - Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }

// console.log(lunch.ingredients)
// console.log(lunch.ingredients[2])
// console.log(lunch.ingredients)

// const lastIngredient = lunch.ingredients.pop()
// console.log(lunch.ingredients)


// lunch.fullSentence = function() {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.slice(0).join(", ")}, and a ${lastIngredient}.`
//   return lunch.ingredients.push(lastIngredient)
// // person.homePlanet = "Earth";
// // console.log(person)

//   }
// console.log(lunch.ingredients)
//   console.log(lastIngredient)
//   console.log(lunch.fullSentence());
// console.log(lunch.ingredients)

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }

// lunch.fullSentence = function() {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.slice(0, 2).join(', ')} and a ${lunch.ingredients[2]}.`

//   }
// console.log(lunch.fullSentence());









// **Consider this variable:**
//
// ```javascript
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
  { house: "fsdf", name: "pizza"}
]
// ```
// - Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// const onlyCats = animals.filter(value => value.type === "cat")

// console.log(onlyCats)
// - Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const animalsName = (house) => {
  return house.map(car => {
    return car.name
  })
}
console.log(animalsName(animals))


// const onlyAnimals = animals.filter(value => a[0])

// console.log(onlyAnimals)
// - Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// - Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
//
// **Consider this variable:**
//
// ```javascript
// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// ```
// - Write the code that destructures the author object so that the following code snippet will run successfully:
//
// ```javascript
// console.log(`${name} is a ${genre} author`)
// // Output: "H. G. Wells is a science fiction author"
// ```
//
// **Consider this variable:**
//
// ```javascript
// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }
//
// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// ```
//
// - Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
//
// ```javascript
// console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// ```
//
// **Consider this variable:**
//
// ```javascript
// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// ```
//
// - Modify the triangleDimensions object to have a method that returns the area of the triangle.
// - Write the code that will update the base to be the value of 6.
//
// **Consider this variable:**
//
// ```javascript
// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }
// ```
//
// - Write the code that logs the name of your cohort.
// - Write the code that uses destructuring to log the name of your cohort.
// - Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// ```javascript
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]
// ```
