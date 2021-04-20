function solve(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let lastKElements = result.slice(-k);
        let sum = lastKElements.reduce((a, x) => a + x, 0);

        result.push(sum);
    }
    console.log(result.join(' '));
}

solve(6, 3);