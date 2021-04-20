function solve(fruit, weight, money) {
	let totalWeight = Number(weight)/1000;
	let price = (money*totalWeight).toFixed(2);
	console.log(`I need $${price} to buy ${totalWeight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);