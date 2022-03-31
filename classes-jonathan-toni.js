// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
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



// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// const blackCoffee = new Coffee("Black", "no", "no")
// console.log(blackCoffee.coffeeProfile())
// Output: A black coffee with no cream, no sugar
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// const regCoffee = new Coffee("Regular", "1", "2")
// console.log(regCoffee.coffeeProfile())
// Output: A regular coffee with 1 cream, 2 sugars
// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Lattee {
  constructor(flavor, milk, shots){
    this.flavor = flavor.toLowerCase()
    this.milk = milk
    this.shots = shots
  }

  latteeProfile(){
    return `A ${this.flavor()} lattee with ${this.milk()}, ${this.shots()}`
  }

  milk(){
    if(this.milk > 1){
      return `${this.milk} milks`
    } else {
      return `${this.milk} milk`
    }
  }

  shots(){
    if(this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }
}
// Write a method for your Latte class that outputs the latte's profile.
//latteeProfile(){
//   return `A ${this.flavor()} lattee with ${this.milk()}, ${this.shots()}`
// }
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
