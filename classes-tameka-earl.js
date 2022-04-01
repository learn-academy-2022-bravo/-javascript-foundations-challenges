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

let blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee.coffeeProfile())


// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

let perfectCoffee = new Coffee("perfect", 1, 2)
console.log(perfectCoffee.coffeeProfile())

//  _____________________________________________________________________________________________________________________

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.

class Latte {
    constructor(flavor, milkType, shot){
      this.flavor = flavor.toLowerCase()
      this.milkType = milkType.toLowerCase()
      this.shot = shot
    }
  
    latteProfile(){
      return `A ${this.flavor} latte with ${this.milkType} milk, ${this.shots()}`
    }

    shots(){
        if(this.shot > 1){
          return `${this.shot} shots`
        } else {
          return `${this.shot} shot`
        }
    }
}  


// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

let plainLatte = new Latte("regular", "", 1)
console.log(plainLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

let fancyLatte = new Latte("hazelnut", "almond", 2)
console.log(fancyLatte.latteProfile())






// Volume of a Cylinder


// Write a class that calculates the volume of a Cylinder to four decimal places. 
// Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class CylinderVolume {
    constructor(radius, height){
      this.pi = Math.PI
      this.radius = radius
      this.height = height
    }

    volume(){
        return Math.round((this.pi * (this.radius ** 2) * this.height) * 10000) / 10000
      }
}

let cylinder = new CylinderVolume(5, 8)
console.log(cylinder.volume())

let cylinder2 = new CylinderVolume(2, 4)
console.log(cylinder2.volume())

let cylinder3 = new CylinderVolume(1, 8)
console.log(cylinder3.volume())


// Write the code that creates three unique cylinder objects







