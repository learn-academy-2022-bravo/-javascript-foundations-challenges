// Coffee Maker
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = 1
//     this.sugar = 2
//   }
//
//   coffeeProfile(){
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }
//
//   creams(){
//     if(this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//   sugars(){
//     if(this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
//
// var mocha = new Coffee ('mocha')
// console.log(mocha.coffeeProfile())

//
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = 0
//     this.sugar = 0
//   }
// var black = new Coffee ('black')
// console.log(black.coffeeProfile())
// output: A black coffee with 0 cream, 0 sugar
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = 1
//     this.sugar = 2
//   }
//   var mocha = new Coffee ('mocha')
// console.log(mocha.coffeeProfile())
// output: A mocha coffee with 1 cream, 2 sugars

// Latte Maker
 // Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
  constructor(flavor, milktype, shots){
    this.flavor = flavor.toLowerCase()
    this.milktype = milktype
    this.shots = shots
  }

  coffeeFlavor(){
    return `A ${this.flavor} coffee with ${this.milktype()}, ${this.shots()}`
  }

  milkType(){
    if(this.milktype > 1){
      return `${this.milktype} milktype`
    } else {
      return ` ${this.milktype} milktype`
    }

  shots(){
    if(this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shots`
    }

}

const latteMix = new Coffee ()
console.log(lattemix)
consol.log(lattemix.coffeeflavor())


//
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = 1
//     this.sugar = 2
//   }
//
//  function () => return "flavor", "milkType", "shot"
//   var mocha = new Coffee ('mocha')
// console.log(mocha.coffeeProfile())



// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
