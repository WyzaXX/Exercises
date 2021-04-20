function solve(num, num2, str) {
    switch (str) {
        case '+':
            console.log(num + num2);
            break;
        case '-':
            console.log(num - num2);
            break;
        case '*':
            console.log(num * num2);
            break;
        case '/':
            console.log(num / num2);
            break;
        case '%':
            console.log(num % num2);
            break;
        case '**':
            console.log(num ** num2);
            break;
    }
}


solve(5, 6, '+');
solve(3, 5.5, '*');