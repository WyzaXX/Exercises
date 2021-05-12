//given an array [2,5,1,2,3,5,1,2,4];
//return the first reccurring number;

function solve(arr) {
    const dictionary = new Set();
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!dictionary.has(element)) {
            dictionary.add(element);
        } else {
            counter++;
            return console.log(element);
        }
    }
    if (counter !== 1) {
        console.log(undefined);
    }
}

const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//should return undefined...
const arr3 = [1, 2, 3, 4];

solve(arr);
solve(arr2);
solve(arr3);