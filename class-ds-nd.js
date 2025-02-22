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
//// const order2 = new Coffee ("decaf", "1", "2")
// console.log(order2)
// console.log(order2.coffeeProfile())

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
class Cylinder {
  constructor (radius, height) {
    this.pie = 3.1415
    this.radius = radius
    this.height = height
  }
  getVolume(){
    let volume = this.pie * this.radius **2 *this.height
    return volume.toFixed(4)
  }
}
// const volumeFinder1 = new Cylinder (2.1,3)
// console.log(volumeFinder1.getVolume())


// Write the code that creates three unique cylinder objects

const volumeFinder1 = new Cylinder (10,20)
console.log(volumeFinder1.getVolume())
//6283.0000
const volumeFinder2 = new Cylinder (3.1415,646.6)
console.log(volumeFinder2.getVolume())
//20046.8847
const volumeFinder3 = new Cylinder (35.45,1027.64)
console.log(volumeFinder3.getVolume())
//4057051.7139
