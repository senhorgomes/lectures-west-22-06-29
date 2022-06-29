//How can we iterate(or loop) through objects?
//(.forEach, .map) (c-style) (for...of) (for...in)
const arrayOfCars = ["car1", "car2", "car3"]
const car1 = {
  color: "Red",
  numberOfDoors: 5,
  isItElectrical: false,
  driveTrain: "AWD",
  transmission: "Automatic",
  wheels: {
    numberOfWheels: 4,
    winterTires: false
  },
}
for(let key in car1){
  if(key === "wheels"){
    console.log(car1[key].numberOfWheels)
    console.log(key.numberOfWheels)
  }
}
// for(let element of arrayOfCars){
//   console.log(element)
// }
// for(let i = 0; i < arrayOfCars.length; i++){
//   console.log("c-style",arrayOfCars[i])
// }


// const keysOfCar = Object.keys(car1)
// const valuesOfCar = Object.values(car1)
// console.log(keysOfCar)
// console.log(valuesOfCar)
// for(let key of keysOfCar){
//   console.log(key)
// }
