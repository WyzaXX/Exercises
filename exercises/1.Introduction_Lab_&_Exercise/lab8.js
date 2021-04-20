function solve(size = 5) {
    let result ='';
    if (size === 1) {
        console.log('*');
    } else {
        for (let i = 0; i < size; i++) {
            if (i!==0) {
                result += '\n';
            }   
            for (let j = 0; j < size; j++) {
                
                result+='* ';
            }
        }
    }
    console.log(result);
}


solve();