// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   getData: function() {
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//   }
// }

// Write the code that accesses the first name of the person object.
//  console.log(person.firstName)
// Write the code that accesses the last name of the person object.
//  console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//  console.log(person.homePlanet)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
//    console.log(person.getData())

// const product = {
//   name: "chair",
//   price: 24.99,
//   describeProduct: function() {
//     return `The product is a ${this.name}. It costs ${this.price}`
//   }
// }

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
//    console.log(product.describeProduct())
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const product = {
//   name: "chair",
//   price: 24.99,
//   totalWithTax: function() {
//     let totalPrice = (this.price * 1.07).toFixed(2)
//     let finalTotalPrice = parseFloat(totalPrice)
//     return finalTotalPrice
//   }
// }
//
// console.log(product.totalWithTax())
//
const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
  sandwichStuff: function() {
    return "The ingredients for a " + this.name +
    " " + this.type + " are " + this.ingredients
  }
}
console.log(lunch.sandwichStuff())
// Write the code that accesses the ingredients property.
//  console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
//  console.log((lunch).ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."


// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// const animalsNames =(array) => {
//   return array.map(obj => {
//     return obj.name
//   })
// }
// console.log(animalsNames(animals))
