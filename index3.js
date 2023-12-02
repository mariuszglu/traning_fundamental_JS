// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

const tips = new Array(0.15, 0.2);
const bills = [125, 555, 44];
const totals = [];

const strTotalValueOut = (bill, tip, totalVal) => {
	console.log(
		`The bill was ${bill} the tip was ${tip} and the total value ${totalVal[0]}`
	);
};

const calcTip = (valBill, valTip) => valBill * valTip;
// const calcTotalValue =

//add bill value 100
bills.push(100);
const lowTip = calcTip(bills[3], tips[0]);
const highTip = calcTip(bills[3], tips[1]);
if (bills[3] < 300 && bills[3] > 50) {
	totals.push(bills[3] + lowTip);
	strTotalValueOut(bills[3], lowTip, totals);
} else {
	totals.push(bills[3] + highTip);
	strTotalValueOut(bills[3], highTip, totals);
}
