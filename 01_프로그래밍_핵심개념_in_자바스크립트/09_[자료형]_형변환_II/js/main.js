// 자바스크립트는 자동으로 형변환을 해주는 기능이 있음

// true / false를 숫자로 변환 했을때의 결과
console.log(Number(true)) // 1
console.log(Number(false)) // 0

// true - true = 0 
console.log(true - true); // 1 - 1 = 0

// 자동으로 숫자형으로 변환 후 연산 되어짐
console.log('4' - true);
console.log(Number('4') - true); // 4 - 1 = 3

console.log('')

// 산술 연산 (+ , - , * , / , % , **)
console.log(typeof (4 + '2'));         // 4 + '2' = '42'
console.log(4 + 2);           // 4 + 2 = 6
console.log(4 - true);        // 4 - 1 = 3
console.log(4 * false);       // 4 * 0 = 0
console.log(4 / '2');         // 4 / 2 = 2
console.log('4' ** true);     // 4 ** 1 = 4
console.log(4 % 'two');       // 4 % 'two' = NaN

console.log('')

// 관계 비교 연산 (< , <= , > , >=)
console.log(2 < '3');          // 2 < 3 = true
console.log(2 > true);         // 2 > 1 = true
console.log('2' <= false);     // 2 <= 0 = false
console.log('two' >= 1);       // 'two' >= 1 = NaN(false)

console.log('')
/**
 * 같음 비교 연산
 * === | !== : 일치 , 불일치
 * ==  | !=  : 동등 , 부등
 */
console.log(1 === '1');       // false
console.log(1 === true);      // false

// 등호 == , !=로 비교시 형변환이 일어나 예상하지 못한 에러가 발생할 수 있음
console.log(1 == '1');        // true
console.log(1 == true);       // true