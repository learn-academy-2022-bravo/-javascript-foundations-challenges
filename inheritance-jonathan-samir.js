// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
class Car {
  constructor (myCar, myYear){
    this.model = myCar
    this.year = myYear
    this.wheels = 4
  }
}

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
//
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
//
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
//
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
class Tesla extends Car{
  constructor (myTesla, myYear){
    super(myTesla, myYear)
  }
}
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// let newTesla = new Tesla("Type C")
// console.log(newTesla)
//Output: Tesla { model: 'Type C', year: undefined, wheels: 4 }

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
let newTesla = new Tesla("Type C", "2022")
console.log(newTesla)
//Output: Tesla { model: 'Type C', year: '2022', wheels: 4 }

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
//
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
//
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
//
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
//
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
//
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
