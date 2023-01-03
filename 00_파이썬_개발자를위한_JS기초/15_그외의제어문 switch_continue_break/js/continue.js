let arr = ['포도','바나나','오렌지','배','석류'];

function UsingForContinue(arr) {
    for (let forCount = 0; forCount < arr.length; forCount++) {
        let fruit = arr[forCount];
        if (fruit === '석류') {
            console.log(`내 사랑 ${fruit}씨.. 드디어 찾았습니다!`);
            break;            
        }
        else {
            console.log(`미안하지만 ${fruit} 당신은 제가 찾던 사람이 아닙니다`);
            continue
        }                
    }
}

function UsingWhileContinue(arr) {
    whileCount = 0;
    while (whileCount < arr.length) {
        let fruit = arr[whileCount];
        if (fruit === '석류') {
            console.log(`내 사랑 ${fruit}씨.. 드디어 찾았습니다!`);
            break
        }
        else {
            console.log(`미안하지만 ${fruit} 당신은 제가 찾던 사람이 아닙니다`);
            whileCount++
            continue
        }        
    }

}
UsingWhileContinue(arr=arr)