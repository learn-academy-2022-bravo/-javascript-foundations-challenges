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

//   Write the code that accesses the ingredients property.
// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"]
// }

//console.log(lunch.ingredients)
//   Write the code that access the third ingredient of the lunch object.

//console.log(lunch.ingredients[2])
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     getData: function() {
//      return  `The ingredients for a ${this.name} sandwich are ${this.ingredients[0]}, ${this.ingredients[1]}, ${this.ingredients[2]}.`
//     }
// }
//     console.log(lunch.getData())

 const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
    ]
//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const type = animals.filter(value => value.type === "cat")
// console.log(type)

//   Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const namesOnly = (array) => {
//     return array.map(obj => {
//         return obj.name
//     })
// }
// console.log(namesOnly(animals))


//   Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

//Function takes in array of animal objects 

//Returning array of animal names
const overTen = (array) => {
//Run filter on the array that is being passed to function 
    overTenArray = array.filter(value => value.age > 10)
    return overTenArray.map(value => value.name)
}
console.log(overTen(animals))


//   Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
