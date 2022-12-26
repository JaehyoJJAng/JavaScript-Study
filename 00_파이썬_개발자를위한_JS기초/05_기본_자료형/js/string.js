// 선언
let str1 = "Hello World!";
let str2 = 'Hello World!';

// 문자열 붙이기
console.log('Hello' + ' Codeit');

// 문자열 변수 붙이기
let x = "hello ";
let y = "Codeit";
console.log(x + y)

// 문자열에도 더하기 할당 연산자 사용가능
x += y;
console.log(x);

// 파이썬 처럼 문자열이 아닌 다른 자료형도 문자열로 바꿔서 연결해줌
let first  = '치즈버거 가격은 ';
let second = 8000;
let third  =  '원입니다.';
console.log(first + second + third)

/* 문자열 포매팅
파이썬에서는 str.format() 또는 f-string(f'{}')을 사용해서 문자열 사이사이에 변수값을 넣었는데 , 자바스크립트도 이와 비슷한 문법이 있다.
문자열을 백틱(`) 기호로 선언하고 , 변수를 ${}로 감싸주면 된다.
*/
let name = '서준';
let greeting = `안녕하세요 ${name}님`
console.log(greeting)

let r = 8;
let u = 13;
let message = `${r} 더하기 ${u}는 ${r + u}입니다.`
console.log(message)

/* 특수문자열
특수 문자들은 그대로 입력하면 안되고 특수 문자열을 사용해야 함.
파이썬에서는 줄바꿈(\n) , 작은따옴포(\') , 큰따옴표(\")같은 것들이 있었는데 , 자바스크립트도 똑같은 특수 문자열을 사용함

\n : 줄바꿈
\t : 탭
\' : 작은 따옴표
\" : 큰따옴표
\\ : 백슬래시
*/
console.log('특정 문자들은 앞에\n백슬래시(\\)를 붙여줘야 합니다')