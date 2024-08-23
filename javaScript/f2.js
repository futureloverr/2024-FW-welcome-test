const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('A,B,C의 마킹 시간을 차례로 입력하세요 (예: 10 12 8): ', (input) => {
    const [timeA, timeB, timeC] = input.split(' ').map(Number);

    const students = [
        {name: 'A', time: timeA},
        {name: 'B', time: timeB},
        {name: 'C', time: timeC}
    ];
    const maxTime = Math.max(timeA, timeB, timeC);

    students.forEach(student => {
        setTimeout(() => {
            console.log(`${student.name} 마킹`);
        }, student.time * 1000);
    });

    setTimeout(() => {
        console.log('시험이 종료되었습니다.');
        r1.close();
    }, maxTime*1000);
    

});