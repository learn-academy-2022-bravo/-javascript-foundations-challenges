// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// describe (`tired`,() => {
//   it (`returns "drink coffe" if you are tired and "keep working" if you are not tired`, ()=>{
//     expect(tired(`yes`)).toEqual(`drink coffe`)
//     expect(tired(`no`)).toEqual(`keep working`)
//   })
// })
// // Write the function that will make the test pass.
// const tired = (answer) => {
//   if (answer == `yes`) {
//     return `drink coffe`
//   } else if ( answer == `no`) {
//     return `keep working`
//   }
// }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// describe (`stressed`,() => {
//   it (`returns "relax" if you are stresssed and "keep going" if you are not stresssed`, ()=>{
//     expect(stressed(`yes`)).toEqual(`relax`)
//     expect(stressed(`no`)).toEqual(`keep going`)
//   })
// })
// // Write the function that will make the test pass.
// const stressed = (answer) => {
//   if (answer === `yes`) {
//     return `relax`
//   } else if (answer === `no`) {
//     return `keep going`
//   }
// }
// // Write the test for a function that returns "in budget" if a price is lower than $300.
// describe (`budget`,() => {
//   it (`returns "in budget" if a price is lower than $300`, ()=>{
//     expect(budget(200)).toEqual(`in budget`)
//   })
// })
// // Write the function that will make the test pass.
// const budget = (price) => {
//   if (price < 300){
//     return `in budget`
//   }
// }
// // Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// describe (`smallerNum`,() =>{
//   it (`returns the smaller number`, ()=>{
//     expect(smallerNum(5, 6)).toEqual(5)
//     expect(smallerNum(4, 3)).toEqual(3)
//   })
// })
// // Write the function that will make the test pass.
// const smallerNum = (num1, num2) => {
//   if (num1 > num2) {
//     return num2
//   } else if ( num1 < num2 ) {
//     return num1
//   }
// }
// // Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// describe (`oddNum`,() =>{
//   it (`returns weather the number is odd`, ()=>{
//     expect(oddNum(3)).toEqual("the number is odd")
//   })
// })
// // Write the function that will make the test pass.
// const oddNum = (num) => {
//   if (num %2 == 1) {
//     return `the number is odd`
//   }
// }
// // Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// describe ("fruitColor",() =>{
//   it ("returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.",() =>{
//     expect(fruitColor("banana")).toEqual("yellow")
//     expect(fruitColor("apple")).toEqual("red")
//     expect(fruitColor("grape")).toEqual("purple")
//   })
// })
// // // Write the function that will make the test pass.
// const fruitColor = (string) => {
//   if (string === "banana"){
//     return "yellow"
//   } else if (string === "apple") {
//     return "red"
//   } else {
//     return "purple"
//   }
// }
// // Write the test for a function called rick that returns "Morty".
describe ("rick"() => {
  it ("returns Morty", () => {
    expect(rick()).toEqual("Morty")
  })
})
// // Write the function that will make the test pass.
const rick = () => {
  return "Morty"
}
// // Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// // Write the function that will make the test pass.
// // Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// // Write the function that will make the test pass.
// // Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// // Write the function that will make the test pass.
// // Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// // Write the function that will make the test pass.
// // Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// // Write the function that will make the test pass.
// // Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
