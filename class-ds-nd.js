// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

// const order1 = new Coffee ("black", "no cream", "no sugar")
// console.log(order1.type)
// console.log(order1.coffeeProfile())

//
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
//
// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// class Latte {
//   constructor(flavor, milkType, nos) {
//     this.flavor = flavor,
//       this.milkType = milkType,
//       this.nos = nos
//   }
//   latteProfile() {
//     return `A ${this.milkType} latte with ${this.flavor}, ${this.nos}`
//   }
// }

// // const order2 = new Latte("carmel", "regular milk", "single shot")
// // console.log(order2)
// // console.log(order2.latteProfile())
// // Latte {
// //   flavor: 'Carmel',
// //     milkType: 'regular milk',
// //       nos: 'single shot'
// // }
// // A regular milk latte with Carmel, single shot

// const order3 = new Latte("hazelnut", "almond milk", "double shot")
// console.log(order3)
// console.log(order3.latteProfile())
// // Latte {
// //   flavor: 'hazelnut',
// //     milkType: 'almond milk',
// //       nos: 'double shot'
// // }
// // A almond milk latte with hazelnut, double shot

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
