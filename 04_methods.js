//Methods? What are those?

//functions -> string.toUpperCase(), array.slice(), array.forEach(), array.map()
//a thing you can call inside something else

const car1 = {
  color: "Red",
  numberOfDoors: 5,
  isItElectrical: false,
  driveTrain: "AWD",
  transmission: "Automatic",
  honk: function(){
    console.log("HONK HONK")
  },
  rev: function(){
    console.log("VROOM VROOM!")
  }
}
const car2 = {
  color: "Blue",
  numberOfDoors: 3,
  isItElectrical: true,
  driveTrain: "2WD",
  transmission: "Automatic",
  string: "Oh hey there",
}
const vinDiesel = {
  family: function(){
    console.log("BECAUSE FAMILY!")
  }
}

const FNF = "family"

// Array.slice()
// car1.honk //Reference
// car1.FNF() //Invoking
vinDiesel["family"]()

console.log(FNF.slice(0,1))
console.log(FNF["slice"](0,1))
