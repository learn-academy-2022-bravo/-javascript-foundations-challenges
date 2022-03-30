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
        return `The ingredients for a PB and Banana sandwich are  ${lunch.ingedients}`}
console.log(bananaSandwich(lunch))
