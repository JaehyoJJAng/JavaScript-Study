// Block 바깥에서 변수 선언
let x = '코드잇';
let myStr = '';
function myFunction() {
    myStr += `${x + ' 을지로'}`;
    console.log(myStr);    
}
myFunction()

// Block 내부에서 변수 선언 후 블록 외부에서 해당 변수 호출
function youFunction() {
    let y = 3;
}
console.log(y + 5); // ReferenceError: y is not defined