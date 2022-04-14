
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
// // Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
// let blackCoffee = new Coffee ("black", 0, 0)
// console.log(blackCoffee.coffeeProfile())

// // Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
// let lightCoffee = new Coffee ("light", 1, 2)
// console.log(lightCoffee.coffeeProfile())
// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
    constructor(flavor, milkType, shots){
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType.toLowerCase()
    this.shots = shots
    }
latteProfile(){
    return `A ${this.flavor} latte with ${this.shot()} and ${this.milkType}`
}
shot(){
    if(this.shots > 1 || this.shots === 0){
        return `${this.shots} shots`
    } else{
        return `${this.shots} shot`
        }
    }
}

// Write a method for your Latte class that outputs the latte's profile.
// shot(){
//     if(this.shots > 1 || this.shots === 0){
//         return `${this.shots} shots`
//     } else{
//         return `${this.shots} shot`
//         }
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
let regularLatte = new Latte("regular", "no milk", 1)
console.log(regularLatte.latteProfile())
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
let hazelnutLatte = new Latte("hazelnut", "almond milk", 2)
console.log(hazelnutLatte.latteProfile())
// Volume of a Cylinder
class Vol{
    constructor(radius, height){
        this.radius = radius**2
        this.height = height
    }
    volcal(){
      return Math.round((Math.PI * this.radius * this.height) * 10000) / 10000
    }
}
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
// let vol1 = new Vol(12, 13)
// console.log(vol1.volcal())


// Write the code that creates three unique cylinder objects
let vol1 = new Vol(12, 13)
let vol2 = new Vol(14, 15)
let vol3 = new Vol(16, 17)

console.log(vol1.volcal())
console.log(vol2.volcal())
console.log(vol3.volcal())
