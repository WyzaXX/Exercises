function solve(x, y) {
    let first = Number(x);
    let second = Number(y);

    let lower = Math.min(first, second);
    let bigger = Math.max(first, second);
    let output = 0;

    for (let i = lower; i > 0; i--) {
        if (bigger % i == 0 && lower % i == 0) {
            output = lower;
            break;
        }
    }

    console.log(output);
}

solve('15', '5');
solve('2154', '458');