"use strict";

const calcAverage = (score1, score2, score3) =>
	((score1 + score2 + score3) / 3).toFixed();

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgDolphins > 2 * avgKoalas) {
		return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
	} else if (avgKoalas > 2 * avgDolphins) {
		return `Koalas win  ${avgKoalas} vs. ${avgDolphins} `;
	} else {
		return "no one win..";
	}
};

let scoreDolphins = calcAverage(100, 50, 50);
let scoreKoalas = calcAverage(65, 54, 49);
console.log("DATA TEST1: ",checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(1000, 50, 50);
scoreKoalas = calcAverage(65, 54, 49);
console.log("DATA TEST2: ",checkWinner(scoreDolphins, scoreKoalas));
