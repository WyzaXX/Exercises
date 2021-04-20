function solve(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    let answer = result.map(x => x * 2).reverse().join(' ');
    console.log(answer);
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);