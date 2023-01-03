function usingSwitch(arr) {
    for (let i = 0; i < arr.length;i++) {
        let fruit = arr[i];
        switch (fruit) {
            case '사과':
                console.log('사과는 1Kg에 12,000원 입니다');
                continue;
            case '바나나':
                console.log('바나나는 1Kg에 6,000원 입니다');
                continue;
            case '오렌지':
                console.log('오렌지는 1Kg에 10,000원 입니다');
                continue;
            case '포도':
                console.log('포도는 1Kg에 20,000원 입니다');
                continue;
            default:
                console.log('과일을 찾지 못했습니다');
                break;    
        }
    }
}

// 배열 생성 (빈 배열)
let arr = ['포도','바나나','오렌지','사과','배'];

usingSwitch(arr=arr)