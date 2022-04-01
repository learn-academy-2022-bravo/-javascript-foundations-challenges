
// ## Challenges

// 1. Coffee Maker

// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams(){
//     if(this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if(this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }


// - Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// const blackCoffee = new Coffee("black","0","0")
// console.log(blackCoffee.coffeeProfile())

// - Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// const regularCoffee = new Coffee("regular",1,2)
// console.log(regularCoffee.coffeeProfile())

// 2. Latte Maker

// - Write a Latte class that takes a flavor, a milk type and a number of shots.
// class Latte {
//     constructor(flavor, milk, shot){
//       this.flavor = flavor.toLowerCase()
//       this.milks = milk
//       this.shot = shot
//     }
  
//     coffeeProfile(){
//       return `A ${this.flavor} coffee with ${this.milks()}, ${this.shots()}`
//     }
  
//     milks(){
//       if(this.milk > 1){
//         return `${this.milk} milks`
//       } else {
//         return `${this.milk} milk`
//       }
//     }
  
//     shots(){
//       if(this.shot > 1){
//         return `${this.shot} shots`
//       } else {
//         return `${this.shot} shot`
//       }
//     }
//   }


// - Write a method for your Latte class that outputs the latte's profile.
// const latteClass1 = new Latte("vanilla","almond",2)
// console.log(latteClass1.coffeeProfile())

// - Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// const latteClass2 = new Latte("regular","no",1)
// console.log(latteClass2.coffeeProfile())

// - Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// const latteClass3 = new Latte("hazelnut","almond",2)
// console.log(latteClass3.coffeeProfile())

// 3. Volume of a Cylinder
class Cylinder {
    constructor (radius, height) {
      this.radius = radius,
      this.height = height,
      this.pi = 3.14159
    }
  
    cylinderProfile(){
      return this.pi * this.radius**2 * this.height
 }  
    result(){
        return this.cylinderProfile().toFixed(4)
    }
}
const redCylinder = new Cylinder(6,4)
console.log(redCylinder.result())

// - Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr<sup>2</sup>h (r is the radius and h is the height of the cylinder)

// - Write the code that creates three unique cylinder objects
const blueCylinder = new Cylinder(6,4,3.14159)
console.log(blueCylinder.result())

const greenCylinder = new Cylinder(6,4,3.14159)
console.log(greenCylinder.result())

// ---
// [Back to Syllabus](../README.md#unit-one-javascript-foundations)
