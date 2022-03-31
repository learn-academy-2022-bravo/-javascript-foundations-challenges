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

//   Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

// blackCoffee = new Coffee("black", 0, 0)
// console.log(blackCoffee)



// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

// sweetCoffee = new Coffee( "sweet", 1, 2)
// console.log(sweetCoffee)

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.



class LatteMaker {
    constructor(flavor, milk, shots){
      this.flavor = flavor.toLowerCase()
      this.milk = milk
      this.shots = shots
    }
  
    coffeeProfile(){
      return `A ${this.flavor} latte with ${this.milk()}, ${this.shots()}`
    }
  
    addFlavor(){
      if(this.flavor > 1){
        return `${this.flavor} flavors`
      } else {
        return `${this.flavor} flavor`
      }
    }
  
    addMilk(){
      if(this.milk > 1){
        return `${this.milk} milks`
      } else {
        return `${this.milk} milk`
      }
    }
  
    addShots(){
      if(this.shots > 1){
        return `${this.shot} shots`
      } else {
        return `${this.shot} shot`
      }
    }
}
    


// Write a method for your Latte class that outputs the latte's profile.

// firstLatte = new LatteMaker("test", "test", "test")
// console.log(firstLatte)

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// regularLatte = new LatteMaker("no flavor", "whole milk", "single")
// console.log(regularLatte)

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

// hazelnutLatte = new LatteMaker("hazelnut", "almond", "two")
// console.log(hazelnutLatte)


// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class CylinderMaker {
    constructor(radius, height){
      this.radius = radius
      this.height = height
    }
    volumeForCylinder() {
        return 3.14 * this.radius **2 * this.height
    }
}

// newCylinder = new CylinderMaker (2, 4)
// console.log(newCylinder.volumeForCylinder())

// Write the code that creates three unique cylinder objects

const threeCylinders = () => {
    newCylinder1 = new CylinderMaker (10, 4),
    console.log(newCylinder1)

    newCylinder2 = new CylinderMaker (20, 4),
    console.log(newCylinder2)

    newCylinder3 = new CylinderMaker (30, 4)
    console.log(newCylinder3) 

    
}
console.log(threeCylinders())