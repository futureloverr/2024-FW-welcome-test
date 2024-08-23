const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

r1.question('나이와 키를 순서대로 입력하세요 (예: 11 150) : ',(input) => {
    const [age, height] = input.split(' ').map(Number);
    if (age >= 14 || height >= 160){
        console.log('X');
    } else {
        console.log('O');
    }
    r1.close();
});