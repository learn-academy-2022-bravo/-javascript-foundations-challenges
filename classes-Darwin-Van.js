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

// const drinks = new Coffee ("black", 0, 0)
// console.log(drinks);
// // Coffee { type: 'black', cream: 0, sugar: 0 }
// console.log(drinks.coffeeProfile());
// A black coffee with 0 cream, 0 sugar

//
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// const drinks = new Coffee ("black", 1, 2)
// console.log(drinks.coffeeProfile());
// A black coffee with 1 cream, 2 sugars

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.


// class Latte{
//   constructor(flavor,milkType,shot){
//     this.flavor = flavor.toLowerCase(),
//     this.milkType = milkType,
//     this.shot = shot
//   }
//   latteProfile(){
//     return `A ${this.flavor} latte with ${this.milk()} and ${this.shots()} `
//   }
//   shots(){
//     if(this.shot > 1){
//       return `${this.shot} shots `
//     } else {
//       return `${this.shot} shot `
//     }
//   }
//   milk(){
//     if(this.milkType === 0){
//     return "no milk"
//   } else {
//     return `${this.milkType}`
//     }
//   }
// }

// const coffeeDrink = new Latte("regular", "almond", 2 )
//
// console.log(coffeeDrink.latteProfile())


// Write a method for your Latte class that outputs the latte's profile.
// output: A regular latte with almond and 2 shots

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// const latte2 = new Latte("regular",0,1)
//
// console.log(latte2.latteProfile())
          // A regular latte with no milk and 1 shot

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// const coffeeDrink = new Latte("hazelnut", "almond milk", 2 )
//
// console.log(coffeeDrink.latteProfile())
        // A hazelnut latte with almond milk and 2 shots

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// volume to four decimal places is the output

class Cylinder {
constructor(radius, height) {
  this.radius = radius,
  this.height = height,
  this.pi = 3.14
  }
  volumeProfile()
  {return this.pi * (this.radius **2) * this.height}

  decmal(){
    return `${this.volumeProfile().toFixed(4)}`}
}
// const volumeCalc = new Cylinder (3, 56)
// console.log(volumeCalc.decmal());

// console.log(volumeCalc.volumeMehtod());
// Write the code that creates three unique cylinder objects


const volumeCalc1 = new Cylinder (3, 56)
console.log(volumeCalc1.decmal());

const volumeCalc2 = new Cylinder (44, 99)
console.log(volumeCalc2.decmal());

const volumeCalc3 = new Cylinder (2, 16)
console.log(volumeCalc3.decmal());
