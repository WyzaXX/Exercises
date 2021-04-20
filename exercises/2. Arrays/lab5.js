function solve(arr) {
    let result = arr.sort((a, b) => a - b);
    let answer = result.slice(0,2);
    console.log(answer.join(' '));
}

solve([30, 15, 50, 5]);