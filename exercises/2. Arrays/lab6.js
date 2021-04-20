function solve(arr) {
    let result = arr.sort((a, b) => b - a);
    let arrHalfLenght = arr.length / 2;

    if (arr.length % 2 == 1) {
        arrHalfLenght++;
    }

    let answer = result.slice(0, arrHalfLenght);
    answer.sort((a, b) => a - b);
    
    console.log(answer);
}

solve([3, 19, 14, 7, 2, 19, 6]);
solve([4, 7, 2, 5]);