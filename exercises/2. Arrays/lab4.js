function solve(arr) {
    let result = arr.sort(compareNumbers);

    for (const n of result) {
        console.log(n);
    }

    function compareNumbers(a, b) {
        return a - b;
    }
}


solve([7, -2, 8, 9]);