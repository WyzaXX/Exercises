function solve (str1, str2, str3) {
let sum = str1.length + str2.length + str3.length;
let avg = Math.floor(sum/3);
console.log(sum);
console.log(avg);
}

let str = 'chocolate';
let str2 = 'ice cream';
let str3 = 'cake';

solve(str,str2,str3);