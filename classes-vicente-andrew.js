// Coffee Maker
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
// var black = new Coffee ('Black', 0, 0)
// console.log(black.coffeeProfile());
// A black coffee with 0 cream, 0 sugar
// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// var sweet = new Coffee ('Sweet', 1, 2)
// console.log(sweet.coffeeProfile())
// A sweet coffee with 1 cream, 2 sugars
// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
//
// class Latte {
//   constructor(flavor, milkType, shot){
//     this.flavor = flavor
//     this.milkType = milkType
//     this.shot = shot
//   }
//   coffeeProfile(){
//     return `A ${this.flavor} latte with ${this.milkType}, and ${this.shots()}.`
//   }
//   shots(){
//     if(this.shot > 1){
//       return `${this.shot} shots`
//     } else {
//       return `${this.shot} shot`
//     }
//   }
// }

// Write a method for your Latte class that outputs the latte's profile.
// var latte1 = new Latte ('Vanilla', 'Oat Milk', 4)
// console.log(latte1.coffeeProfile())
// A Vanilla coffee with Oat Milk, and 4 shots.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// var latte2 = new Latte ('Regular', '2% Milk', 1)
// console.log(latte2.coffeeProfile())
// A Regular coffee with 2% Milk, and 1 shot.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// var latte3 = new Latte ('Hazelnut', 'Almond Milk', 2)
// console.log(latte3.coffeeProfile())
// A Hazelnut latte with Almond Milk, and 2 shots.


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//Pseudo Code
// create a class called VolumeCalc w/constructor containing the radius and height
// create a this.r and this.h for radius and height
// include .tofixed (4) in code to round to 4 decimal places
//
// class VolumeCalc {
// constructor (radius, height){
//     this.radius = radius
//     this.height = height
//   }
//   calculate(){
//     return (this.height * Math.PI * this.radius * this.radius).toFixed(4);
//   }
// }
// // var cyl = new VolumeCalc (5, 10)
// // console.log(cyl.calculate());
// // 785.3982
//
// // Write the code that creates three unique cylinder objects
//
// var cyl2 = new VolumeCalc (10, 15)
// var cyl3 = new VolumeCalc (20, 25)
// var cyl4 = new VolumeCalc (30, 35)
// console.log(cyl2.calculate());
// console.log(cyl3.calculate());
// console.log(cyl4.calculate());
// 4712.3890
// 31415.9265
// 98960.1686
