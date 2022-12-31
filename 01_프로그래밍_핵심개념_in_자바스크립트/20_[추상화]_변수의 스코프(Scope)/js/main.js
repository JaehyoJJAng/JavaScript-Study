// Variable Scope : 변수의 범위,영역


// 범수의 유효범위 (1) : block 문 내에서 할당된 변수를 블락 바깥에서 호출하는 경우
{
  const x = "codeit"; // Local Variable
}
// console.log(x); // ReferenceError: x is not defined

// 범수의 유효범위 (2) : 함수의 Block 문 내에서 할당된 변수 x를 함수 밖에서 호출하는 경우
var myFunction = () => {
  let x = 3; // 지역 변수 (Local Variable)
  console.log(x);
}
// console.log(x); // ReferenceError: x is not defined


// 변수의 유효범위 (3) : 변수 x를 전역 변수로 선언 후 Block문 내에서 변수 x 호출해보기
const x = 'codeit'; // 전역 변수 (Global Variable)
{
  var myFunction = () => {
    console.log(x);
  }
}

// 변수의 유효범위 (4) : Block문 , 바깥에서 동일한 변수가 선언된 경우 , 먼저 Block문 내에서 로컬 변수가 있는지 확인 후 , 없을 경우 전역 변수 체크
const c = 5;
{
  var myFunction = () => {
    const c = 3;
    console.log(c); // 3
  }
  myFunction();
  console.log(c); // 5
}