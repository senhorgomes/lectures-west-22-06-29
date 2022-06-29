//Easier way to access this bigObject?

// const bigObject = {
//   level: 1,
//   floors: {
//     basement: {
//       level: -1,
//     },
//     main: {
//       level: 1,
//       floors: {
//         second: {
//           level: 2,
//         }
//       }
//     }
//   },
// }
// console.log(bigObject.floors.main.floors.second.level)
// const floors = bigObject.floors;
// console.log(floors)
// const main = bigObject.floors.main;
// console.log(main.floors.second)

const car1 = {
  color: "Red",
  numberOfDoors: 5,
  isItElectrical: false,
  driveTrain: "AWD",
  transmission: "Automatic",
}
// console.log(car1)
// const car2 = car1 //Creating another car based on the original car1 object

// car2.color = "sick neon green wrap" //modifying the property, or key value of car2s color

// console.log("car2", car2)
// console.log("car1", car1)

const replaceObject = function(obj) {
  obj = {} //we are trying to change the object with the reference
  return obj
}
replaceObject(car1)
console.log(car1)
const replaceObjectKey = function(obj) {
  //modifying the object using the key and values of the object
  obj.color = "sick neon green wrap" 
  return obj
}
replaceObjectKey(car1)
console.log("I changed the color of my car", car1)