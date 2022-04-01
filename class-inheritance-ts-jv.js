
class Car {
    constructor (modelType, myCarYear) {
        this.model = modelType 
        this.year = myCarYear
        this.lightsOn = false
        this.turnSignalOn = false
        this.speed = 0
        this.brakes = 0
    }

    myCarWheels(numberOfWheels) {
        this.wheels = numberOfWheels
      }

    myCarLights() {
        this.lightsOn = !this.lightsOn
      }

    myTurnSIgnal() {
        this.signalOn = !this.signalOn
      }

    mySpeed(milesPerHour) {
        this.speed = milesPerHour
      }

    myBraking(brakeMilesPerHour) {
        this.slowDownSpeed = this.speed - brakeMilesPerHour
      }

    
}

// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car

    // let myCar = new Car ()
    // console.log(myCar)

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

    // let myCar = new Car ("generic car")
    // console.log(myCar)

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

    let myCar = new Car ("generic car", 1976)
    console.log(myCar)

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

    myCar.myCarWheels(4)
    console.log(myCar)

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Tesla extends Car {
    constructor (modelType, myCarYear) {
        super(modelType, myCarYear)
    }
}

// Create an object called myTesla which is a instance of class Tesla

// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

let myTesla = new Tesla("electric", 2022)
//console.log(myTesla)

myTesla.myCarLights()
myTesla.mySpeed(10)
myTesla.myBraking(7)
console.log(myTesla)


// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car {
    constructor (modelType, myCarYear) {
        super(modelType, myCarYear)
    }
}

// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

let myToyota = new Toyota("hybrid", 2017)
console.log(myToyota)

myToyota.myCarLights()
console.log(myToyota)

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car

class Volkswagen extends Car {
    constructor (modelType, myCarYear) {
        super(modelType, myCarYear)
    }
}

// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

let myVolkswagen = new Volkswagen("clunker", 1999)
console.log(myVolkswagen)

myVolkswagen.myCarLights()
console.log(myVolkswagen)


// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// Story: As a programmer, I can turn the lights in all my cars on and off.
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
// Story: As a programmer, I can slow my Tesla down by 7 per braking.



// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
// The method can be created in the parent class and accessed by all child classes