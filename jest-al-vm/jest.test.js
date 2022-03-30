// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

describe("coffee", () => {
    it("logs drink coffee if you are tired and keep working if you are not tired", () => {
        expect(drinkCoffee("yes")).toEqual("drink coffee")
        expect(drinkCoffee("no")).toEqual("keep working")
    })
})


const drinkCoffee = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else {
        return "keep working"
    }
  }









// const isThatSoup = (string) => {
//     if(string === "yes") {
//       return "that is soup"
//     } else {
//       return "that is not soup"
//     }
//   }


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

// describe ("stress", () => {
//  it(returns a string that says "relax if you are stressed and keep going if you are not.")
// }
// expect(stress()).toEqual("relax if you are stressed and keep going if you are not.")


// const amIStressed= (string) => {
//     if(string === "yes") {
//         return "relax"
//     } else {
//         return "keep going"
//     }
//   }

//   console.log(amIStressed("yes"))

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.


// describe("inBudget", () => {
//     it returns in budget" if a price is lower than $300.")
// })
