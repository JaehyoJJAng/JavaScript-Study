console.log('10' + '5'); // 105
console.log(10 + 5);  // 15

// 형 변환 (Type Conversion)
console.log(Number('10') + Number('5')); // 15
console.log(String(10)   + String('5')); // 105


// 숫자 -> 문자
var x = 123;
console.log(String(x))  // 123
console.log(typeof x);  // number
console.log(typeof String(x));  // string

console.log('');

// 불린 -> 문자
var y = true;
console.log(String(y)); // true
console.log(typeof y);  // boolean
console.log(typeof String(y)); // string

// 문자 -> 숫자
var z = '문자';
console.log(Number(z));   // NaN
console.log(typeof z);    // string
console.log(typeof Number(z));  // number

console.log('');

// 불린 -> 숫자
var v = true;
console.log(Number(v)); // 1 

var v = false;
console.log(Number(v)); // 0

console.log(typeof v);  // boolean
console.log(typeof Number(v));  // number


console.log('')

// 문자 -> 불린
var a = '문자';
console.log(Boolean(a));  // true

var a = '';
console.log(Boolean(a));  // false

console.log(typeof a);    // string
console.log(typeof Boolean(a)); // boolean

// 숫자 -> 불린
var b = 123;
console.log(Boolean(b));  // true

var b = NaN;
console.log(Boolean(b));  // false

console.log(typeof b);    // number
console.log(typeof Boolean(b)); // boolean
