var obj = {
    name : 'alabala',
    age:'20',
    gender: '',
    gender2: 'male',
};

//returns right if left is null or undefined
const operatorQQ = obj.gender ?? obj.gender2;

//returns right if left is ANY falsy value including("",'',``,0)
const operatorOr = obj.gender || obj.gender2;

//returns male
console.log(operatorQQ);
//returns undefined but gender is an empty string
console.log(operatorOr);