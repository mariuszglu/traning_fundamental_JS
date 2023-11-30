// Example: The bill was 275, the tip was 41.25, and the total value 316.25.
"use strict";
const bill = 400;

const tipLow = 0.15 * bill;
const tipHigh = 0.2 * bill;

let totalValue = 0;

const strTotalValueOut = (bill, tip, totalVal) => {
	console.log(
		`The bill was ${bill} the tip was ${tip} and the total value ${totalVal}`
	);
};

if (bill < 300 && bill > 50) {
	totalValue = bill + tipLow;
	strTotalValueOut(bill, tipHigh, totalValue);
} else {
	totalValue = bill + tipHigh;
	strTotalValueOut(bill, tipHigh, totalValue);
}

let hasDriverLicence = false;
const passTest = true;
if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("You ar pass egzam");
const dateNow = 2023
const age = (birthday) => dateNow - birthday;

const yearsUntilRetirement = (firstName, birthday) => {
    const age1 = age(birthday)
	const timeToRetirement = 65 - age1;
	if (age1 >= 65) {
        const fromYear = age1 - 65
		return `${firstName}, you are retirement from ${fromYear} years`;
	}

	if (age1 < 0) {
		return `${firstName}, you weren't born yet `;
	} else {
		return `${firstName} will go to retirement at ${timeToRetirement} `;
	}
};

console.log(yearsUntilRetirement('Mariusz',2020))

const cutFruit = (fruit) => fruit * 5;

const makeSalad = (orange, kivi) => {
	const piecesOrange = cutFruit(orange);
	const piecesKivi = cutFruit(kivi);
	return `The salad consist of ${piecesOrange} orange and ${piecesKivi} kivi`;
};

console.log(makeSalad(3, 10));
//somee



