function solve(arr) {
    sum(arr);
    inverseSum(arr);
    concat(arr);
}

function sum(arr) {
    let result = arr.reduce((a, b) => a + b, 0);
    return console.log(result);
}

function inverseSum(arr) {
    let result = arr.reduce((a, b) => a+ 1 / b, 0);
    return console.log(result.toFixed(4));
}

function concat(arr) {
    let result = arr.map(String);
    let ans = result.reduce((a, b) => `${a}` + `${b}`);
    return console.log(ans);
}


solve([1, 2, 3]);
solve([2, 4, 8, 16]);
