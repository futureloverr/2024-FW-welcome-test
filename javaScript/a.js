const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('세 자리 정수를 입력하세요: ', (number) => {
    if (number.length === 3 && !isNaN(number)) {
        let reversedNumber = number.split('').reverse().join('');
        reversedNumber = parseInt(reversedNumber, 10);
        console.log("출력: " + reversedNumber);
    } else {
        console.log("세 자리 정수를 다시 입력하세요.");
    }
    
    rl.close();
});
