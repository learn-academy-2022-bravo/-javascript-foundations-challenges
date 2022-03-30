// // Challenges
// // Consider this variable:
// //
// const person = {
//   firstName: "Arthur",
//   lastName: " Dent",
//   homePlanet: "Earth",
//    addUp: function(){
//     return this.firstName + this.lastName + " is from planet " + this.homePlanet
//   }
// }
// // Write the code that accesses the first name of the person object.
// console.log(person.firstName)
//
// // Write the code that accesses the last name of the person object.s
// console.log(person.lastName)
//
// // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//
// console.log(person.homePlanet)
//
// // Update the person object with a method that logs "Arthur Dent is from planet Earth".
//
// console.log(person.addUp())
//
// // //addUp: function() {
// // //   return this.num1 + this.num2 + this.num3
// //  }
// // }
//
// //Output:Arthur Dent is from planet Earth


//Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99,
//
//   //addUp: function(){
//   //return "The product is a " + this.name + ". It costs $" + this.price + "."
//   // }
//  }

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

//console.log(product.addUp())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// Sale tax at $24.99/.07 = $1.70
//round it to 2 decimal places $2.00
//Sales total $26.69

// let salesTax = {
//   tax: 1.7,
//   symbol:"$",
//   addUp1: function() {
// return totalPrice = this.symbol + product.price + this.tax
// }

//   addUp2: function() {
// return salesTax.totalPrice
//   }
// }

// console.log(salesTax.addUp1())
// console.log(salesTax.addUp2())





// Consider this variable:
//
// const lunch = {
//   name: "PB and Banana",
//   type: " sandwich",
//   ingredients: ["bread", " peanut butter", " banana"]
// }
// // Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// // [ 'bread', 'peanut butter', 'banana' ]
//
// // Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// // banana
//
// // Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// let pbSand = {
//   string1: "The ingredients for a ",
//   string2: " are ",
//   string3: " and ",
//   string4: ".",
//   string5: ",",
//   addUp: function(){
//     return this.string1 + lunch.name + lunch.type + this.string2 + lunch.ingredients[0] + this.string5 + lunch.ingredients[1] + this.string5 + this.string3 +lunch.ingredients[2] + this.string4
//   }
// }
// console.log(pbSand.addUp())
// The ingredients for a PB and Banana sandwich are bread, peanut butter, and  banana.

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
//Look up ^

// Consider this variable:
//
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const cats = animals.filter(value => value.type === "cat")
return cats
console.log(animals)


// const onlyCats = (array) => {
//   return array.map(obj => {
//     return obj.type
//   })
// }
// console.log(onlyCats(animals)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.


// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// Consider this variable:
//
// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // Output: "H. G. Wells is a science fiction author"
// Consider this variable:
//
// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }
//
// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// Consider this variable:
//
// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// Consider this variable:
//
// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]
