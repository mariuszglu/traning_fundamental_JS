class Car {
	constructor(nameCar, speed) {
		this.nameCar = nameCar;
		this.speed = speed;
	}

	accelerate() {
		this.speed = this.speed + 10;
		this.getInformations();
	}

	brake() {
		this.speed = this.speed - 5;
		this.getInformations();
	}
}

// Car.prototype.accelerate = function () {
// 	this.speed = this.speed + 10;
//     this.getInformations()
// };

// Car.prototype.brake = function () {
// 	this.speed = this.speed - 5;
// 	this.getInformations();
// };

Car.prototype.getInformations = function () {
	console.log(`${this.nameCar} going at ${this.speed} km/h`);
};

const car1 = new Car("Mercedes", 120);
const car2 = new Car("BMW", 80);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();
