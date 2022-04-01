// Challenges
// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.
//
// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.
//
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

//Pseudo Code
// WRITE THE TEST-RED
// create a function caffeine
// returns "drink coffee" if tired
// returns "keep working" if not tired

// describe("caffeine", () => {
//   it("returns a string that says drink coffee", () => {
//     expect(caffeine("tired")).toEqual("drink coffee")
//     expect(caffeine("not tired")).toEqual("keep working")
//   })
// })


//FAIL  ./jest.test.js
  //● Test suite failed to run

  //  ReferenceError: caffeine is not defined

//WRITE THE CODE-GREEN
// const caffeine = (string) => {
//   if(string === "tired"){
//     return "drink coffee"
//   } else if(string === "not tired") {
//     return "keep working"
//   }
// }

// PASS  ./jest.test.js
//  caffeine
//    ✓ returns a string that says drink coffee (4 ms)

//REFACTOR IF NEEDED-GREEN

// const caffeine = (string) => {
//   if(string === "tired"){
//     return "drink coffee"
//   } else {
//     return "keep working"
//   }
// }

// PASS  ./jest.test.js
//  caffeine
//    ✓ returns a string that says drink coffee (4 ms)




// Write the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// WRITE THE TEST-RED
// create a function chill
// returns "relax" if stressed
// returns "keep going" if not stressed

// describe("chill", () => {
//   it("returns a string that says relax", () => {
//     expect(chill("stressed")).toEqual("relax")
//     expect(chill("not stressed")).toEqual("keep going")
//   })
// })

// GOOD FAILURE
// FAIL  ./jest.test.js
// chill
//   ✕ returns a string that says relax (1 ms)

// WRITE THE CODE -- GREEN

// const chill = (string) => {
//   if(string === "stressed"){
//     return "relax"
//   } else if(string === "not stressed") {
//     return "keep going"
//   }
// }

// PASS  ./jest.test.js
// chill
//   ✓ returns a string that says relax (1 ms)


// REFACTOR 

// const chill = (string) => {
//   if(string === "stressed"){
//     return "relax"
//   } else {
//     return "keep going"
//   }
// }

// PASS  ./jest.test.js
// chill
//   ✓ returns a string that says relax (1 ms)


// Write the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.


// WRITE THE TEST-RED
// create a function - budget
// returns "in budget" if price is lower than $300

describe("budget", () => {
  it("returns a string that says in budget", () => {
    expect(budget(price <= 300)).toEqual("in budget")
  })
})


//WRITE THE CODE -- GREEN

const budget = (price) => {
    if(price <= 300){
      return "in budget"
    } 
  }



// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
