//Square bracket notation and dot notation?

//Describe properties of a specific element
const car1 = {
  color: "Red",
  numberOfDoors: 5,
  isItElectrical: false,
  driveTrain: "AWD",
  transmission: "Automatic",
}
const car2 = {
  color: "Blue",
  numberOfDoors: 3,
  isItElectrical: true,
  driveTrain: "2WD",
  transmission: "Automatic",
  string: "Oh hey there"
}
//PLEASE DONT ACTUALLY DO THIS AT YOUR JOB
// car2.color = {
//   paintType: "Acrylic",
//   color: car2.color
// }
// console.log("first",car2)
// car2.color = {
//   paintType: "Acrylic",
//   color: car2.color
// }
// console.log("second",car2)
//Dot notation is VERY VERY specific and literal.
//Square bracket notation - isnt so specific

// const string = "transmission"
// console.log("Number of doors", car2.string) //doesn't reference variable
// console.log("Number of doors", car2[string]) //references varaible

// someComplicatedObject[someKey][anotherKey][0][anotherKeyAgain].notation
// const aVariable = someComplicatedObject.someKey.anotherKey[anotherKeyAgain]
// aVariable.notation

