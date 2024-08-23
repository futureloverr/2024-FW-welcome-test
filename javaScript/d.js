const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

function calculateSum(n){
    return (n*(n+1))/2;
}
function askforPositiveInteger(){
r1.question('양의 정수를 입력하세요: ', (input) => {
    const n = parseInt(input, 10);

    if (n>0){
        const sum = calculateSum(n);
        console.log(sum);
        r1.close();
    } else{
        console.log('X');
        askforPositiveInteger();

    }
});
}
askforPositiveInteger();//재귀의 종료 조건