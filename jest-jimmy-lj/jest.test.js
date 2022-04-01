// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.



//PSEUDO:
// created a function called youTired
//

describe("youTired", () => {
    it("logs 'drink coffee' or 'keep working' based on yes or no input", () => {
      expect(youTired("yes")).toEqual("drink coffee")
      expect(youTired("no")).toEqual("keep working")
    })
  })
//   Test Suites: 1 failed, 1 total


// Write the function that will make the test pass.
//PSEUDO:
// function name is youTired
// use conditionals to determine output
// input: datatype boolean value
// output: dataype string
  const youTired = (string) => {
    if(string === "yes") {
      return "drink coffee"
    } else {
      return "keep working"
    } 
  }

//   PASS  ./jest.test.js
//   youTired
//     ✓ logs 'drink coffee' or 'keep working' based on yes or no input (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

describe("youStressed", () => {
    it("logs 'relax' or 'keep going' based on yes or no input", () => {
      expect(youStressed("yes")).toEqual("relax")
      expect(youStressed("no")).toEqual("keep going")
    })
  })
//   Test Suites: 1 failed, 1 total
//   Tests:       1 failed, 1 passed, 2 total

// PSEUDO:
// Create a function named youStressed
// used conditionals to determine output
// input: boolean value for our datatype
// output: return a string


const youStressed = (string) => {
    if(string === "yes") {
      return "relax"
    } else {
      return "keep going"
    } 
  }



// Write the test for a function that returns "in budget" if a price is lower than $300.
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