const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isLeapyear(year){
    if (year % 400 == 0){
        return true;
    } else if (year % 100 == 0){
        return false;
    } else if (year % 4 == 0){
        return true;
    } else {
        return false;
    }
}

function MonthToDays(year, month){
    switch(month){
        case 2:
            return isLeapyear(year) ?29:28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}

r1.question('연도와 월을 순서대로 입력하세요 (예: 2024 8) : ',(input) => {
    const [year, month] = input.split(' ').map(Number);
    if(month < 1 || month > 12){
        console.log('월을 다시 입력하세요.')
    } else{
        const days = MonthToDays(year, month);
        console.log(days);
    }
    r1.close();

});