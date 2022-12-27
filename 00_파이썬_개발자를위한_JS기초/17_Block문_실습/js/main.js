// Block문 내부에서 정의한 변수 외부에서 호출해보기
let temperature = 32;

if (temperature >= 30) {
    let message = '더워요';
}
else if (temperature <= 10) {
    let message = '추워요';
}
else {
    let message = '적당해요';
}
console.log(message); // ReferenceError: message is not defined

// Block문으로 감싸기
/* temperature 변수를 Block 내부의 변수로 지정하니 위에서 전역변수로 설정된 temperature 변수와의 중복 에러가 발생하지 않음 */
{
    let temperature = 32;

    if (temperature >= 30) {
        let message = '더워요';
    }
    else if (temperature <= 10) {
        let message = '추워요';
    }
    else {
        let message = '적당해요';
    }

    console.log()
}
