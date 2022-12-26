// 자바스크립트에서는 true | false 를 사용

let x = true;
let y = false;

/* 비교연산자
파이썬 : ==(같다) , !=(같지않다)
자바스크립트 : ===(같다) , !==(같지않다)
*/
console.log(2 > 1); // true
console.log(3 === 3); // true
console.log(3 !== 3); // false

/* ===과 ==
자바스크립트에도 == 연산자가 있지만 , 자동으로 형 변환(type conversion)을 해줌
*/

// ==
console.log('3' == 3); // true : 문자열 3을 알아서 숫자형 3으로 바꿔서 비교

// ===
console.log('3' === 3); // false

/* 조합연산자
python : and , or , not
JS :      && , || , !     
*/
// 두 값이 모두 참이어야 함
console.log((1 < 2) && (3 === 3)); // true
console.log((2 < 1) && (3 === 3)); // false

// 두 값 중 하나만 참이어도 참
console.log((1 < 2) || (3 === 3)); // true
console.log((2 < 1) || (3 === 3)); // true

// 값 부정
console.log(!(1 < 2)); // false
console.log(!(2 < 1)); // true