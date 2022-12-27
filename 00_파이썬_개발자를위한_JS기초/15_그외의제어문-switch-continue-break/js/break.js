// 배열 생성 (빈 배열))
let arr = [];
arr[0] = '배';
arr[1] = '바나나';
arr[2] = '포도';
arr[3] = '레몬';
arr[4] = '오렌지';


function ForUsingBreak(arr) {
    for (let forCount = 0; forCount < arr.length; forCount++) {
        let fruit = arr[forCount];
        if (fruit === '포도') {
            console.log('포도는 1Kg에 10,000원 입니다');
            break            
        }   else {
            console.log(`나머지 과일 ${fruit}은 사지 않습니다`)
        }
        
    }
}
ForUsingBreak(arr=arr)

function WhileUsingBreak(arr) {
    whileCount = 0;
    while (whileCount < arr.length) {
        let fruit = arr[whileCount];
        if (fruit == '포도') {
            console.log("포도는 1Kg에 10,000원 입니다");
            break;
        } 
        whileCount += 1;
    }
}
WhileUsingBreak(arr=arr)