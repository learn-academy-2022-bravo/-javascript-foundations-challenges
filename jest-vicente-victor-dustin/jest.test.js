// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("areTired", () => {
  it("returns drink coffee or keep working based on input", () => {
    expect(areTired("yes")).toEqual("drink coffee")
    expect(areTired("no")).toEqual("keep working")
  })
})
// Write the function that will make the test pass.
const areTired = (string) => {
  if (string === "yes") {
    return "drink coffee"
  } else {
    return "keep working"
  }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("noStress", () => {
  it("returns relax or keep going based on input", () => {
    expect(noStress("yes")).toEqual("relax")
    expect(noStress("no")).toEqual("keep going")
  })
})
// Write the function that will make the test pass.
const noStress = (string) => {
  if (string === "yes"){
    return "relax"
  } else {
    return "keep going"
  }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budgetTest", () => {
  let num1 = 200
  it("returns in budget based on input", () => {
    expect(budgetTest(num1)).toEqual("in budget")
  })
})
// Write the function that will make the test pass.
let num1 = 200
const budgetTest = (num1) => {
  if (num1 < 300) {
    return "in budget"
  }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smallerValue", () => {
  it("returns smaller number based on input", () => {
    expect(smallerValue(value1, value2)).toEqual(value2)
  })
})
// Write the function that will make the test pass.
let value1 = 44
let value2 = 21
const smallerValue = (value1, value2) => {
  if (value1 > value2) {
    return value2
  } else {
    return value1
  }
}
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("")
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
