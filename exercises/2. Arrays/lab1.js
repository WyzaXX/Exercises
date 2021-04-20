function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    let ans = result.join(' ');
    console.log(ans);
}

solve(['20', '30', '40', '50', '60']);