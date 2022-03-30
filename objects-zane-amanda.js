// Challenges
// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

// const person = {
//     firstName: "Arthur", 
//     lastName: "Dent",
//     planet: "Earth",
//     getData: function() {
//     return  `${this.firstName} ${this.lastName} is from planet ${this.planet}`
//     }
//   }
//   console.log(person.getData())

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const product = {
//     name: "chair",
//     price: 24.99 ,
//     getData: function() {
//       return `The product is a. ${this.name} It costs ${this.price}`
//     }
//   }
//   console.log(product.getData())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const product = {
//     price: 24.99 ,
//     totalWithTax: function() {
//       return  ((this.price * .07) + this.price).toFixed(2)
//     }
//   }
//   console.log(product.totalWithTax())
