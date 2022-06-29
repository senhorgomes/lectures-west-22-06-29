const car1 = {
  color: "Red",
  numberOfDoors: 5,
  isItElectrical: false,
  driveTrain: "AWD",
  transmission: "Automatic",
  changeMyColor: function() {
    this.color = "Pink"
  }
}
// car1.changeMyColor()
console.log(car1.color)