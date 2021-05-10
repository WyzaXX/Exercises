function solve(arr1,arr2) {
    const dictionary = new Map();
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        checkElementInsideMap(dictionary, element);
    }
    for (let j = 0; j < arr2.length; j++) {
        const element = arr2[j];
        checkElementInsideMap(dictionary,element);
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const couplesMap = new Map([...dictionary].filter(([key,value]) => value > 1));
    
    console.log(...couplesMap);
}

function checkElementInsideMap(map, element) {
    if (!map.has(element)) {
        map.set(element, 0);
    }
    map.set(element, map.get(element)+1);
}

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

solve(arr1,arr2);
