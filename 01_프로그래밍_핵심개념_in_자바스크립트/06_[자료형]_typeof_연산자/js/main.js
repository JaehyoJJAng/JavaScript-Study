// typeof 값

console.log(typeof 1);    // number
console.log(typeof 1.0);  // number
console.log(typeof '1');  // string
console.log(typeof "1");  // string
console.log(typeof `1`);  // string


let Name = 'Codeit';
function sayHello(Name) {
  console.log(`Hello ${Name}`)
};

var sayHello2 = (Name) => {
  console.log(`Hello ${Name}`)
}

console.log(typeof Name);       // string
console.log(typeof sayHello);   // function
console.log(typeof sayHello2);  // function


// typeof 연산자는 사칙연산 연사자보다 우선순위가 높음
// 'hello' + "Codeit" 문자열 연산보다 typeof "Hello" 연산이 먼저 되어버린 것
console.log(typeof "Hello" + "Codeit");   // stringCodeit

// typeof 8 연산을 먼저 해버려서 문자열 number를 - 3 연산 해버리니 문자열과 숫자 값을 연산하려다 보니 이것은 숫자값이 아니다 라는 의미의 NaN이 나온것
console.log(typeof 8 - 3);  // NaN(Not a Number)

// 괄호()를 이용하여 연산자의 우선순위를 높여주면 된다.
console.log(typeof ("Hello" + "Codeit")); // string
console.log(typeof (8 - 3));  // number