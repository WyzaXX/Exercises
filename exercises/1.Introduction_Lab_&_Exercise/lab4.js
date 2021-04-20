function solve(input) {
    if (typeof input === 'number') {
        let ans = Math.PI * Math.pow(input, 2);

        console.log(`${ans.toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
}

solve(5);
solve('name');