// Coffee Maker
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
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// const blackCoffee = new Coffee("black", 0, 0)
// console.log(blackCoffee.coffeeProfile())
// // Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// const normal = new Coffee("normal", 1, 2)
// console.log(normal.coffeeProfile())
// // Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
// class Latte {
//     constructor(flavor, milk, shots){
//       this.flavor = flavor
//       this.milk = milk
//       this.shots = shots
//     }

// // Write a method for your Latte class that outputs the latte's profile.
// latteProfile(){
//     return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots} shots of expresso.`
//   }
// }

// // Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// const regular = new Latte("regular", "standard", 1)
// console.log(regular.latteProfile())
// // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// const hazelnut = new Latte("hazelnut", "almond", 2)
// console.log(hazelnut.latteProfile())



// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)


class Cylinder {
  constructor(height, radius){
    this.height = height
    this.radius = radius 
    
    }
     volume()  {
    return (this.height * (this.radius * this.radius) * Math.PI) 
    }
}
// Write the code that creates three unique cylinder objects
const num1 = new Cylinder(8,7)
console.log(num1.volume().toFixed(4))

const num2 = new Cylinder(5,4)
console.log(num2.volume().toFixed(4))

const num3 = new Cylinder(3,9)
console.log(num3.volume().toFixed(4))
