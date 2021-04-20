function solve(matrix) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    matrix.forEach(row => {
        let currMax = Math.max(...row);

        if (currMax > maxNumber) {
            maxNumber = currMax;
        }
    });

    console.log(maxNumber);
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);