const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

r1.question('알파벳 문자 하나를 입력하세요:  ', (char) => {
    const input = char.toLowerCase();
    if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
        console.log('O');
    } else {
        console.log('X');
    }
    r1.close();

    
});