// Story: As a programmer, I can make a car.


// Write a variable called myCar which is an instance of the class Car

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

class Car {
    constructor(carmodel) {
        this.model = carmodel
        this.caryear = 0
        this.wheels = 4
    }
    Year(number) {
        this.caryear = number
    }
}

class TeslaCar extends Car {
    constructor(carmodelinchild) {
        super(carmodelinchild)
    }
}

let myTesla = new TeslaCar("Y")
myTesla.Year(2009)

// let myCar = new Car("generic car")
// myCar.Year(1965)

console.log(myTesla)

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
    //Car { model: 'generic car', caryear: 1965 }


// Story: As a programmer, I can tell how many wheels myCar has.
    //Car { model: 'generic car', caryear: 1965, wheels: 4 }

// Calling the method wheels will return 4
    // Car { model: 'generic car', caryear: 1965, wheels: 4 }

// Story: As a programmer, I can make a Tesla car.

// class Tesla inherits from class Car

// Create an object called myTesla which is a instance of class Tesla


// Story: As a programmer, I can give my Tesla a model on initialization.
    //TeslaCar { model: 'Y', caryear: 2009, wheels: 4 }

// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Tesla a year on initialization.
    //TeslaCar { model: 'Y', caryear: 2009, wheels: 4 }
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota