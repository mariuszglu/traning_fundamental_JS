class Car {
	constructor(nameCar, speed) {
		this.nameCar = nameCar;
		this.speed = speed;
	}
}

Car.prototype.accelerate = function () {
	this.speed = this.speed + 10;
};

Car.prototype.brake = function(){
    this.speed = this.speed - 5
}

Car.prototype.getInformations = function(){
console.log(`${this.nameCar} going at ${this.speed} km/h`)
}

const car1 = new Car("Mercedes", 120);
const car2 = new Car("BMW", 80);
// console.log(car1);
// console.log(car2);

car1.accelerate()
car2.accelerate()
car1.getInformations()
car2.getInformations()
// console.log(car1);
// console.log(car2);

car1.brake()
car2.brake()
car1.getInformations()
car2.getInformations()
// console.log(car1);
// console.log(car2);




