// 숫자형으로 : Number()
// 문자열로 : String()
// 불린형으로 : Boolean()
// python : int() , str() , list() , tuple() , float()

// 스트링 숫자 값을 int 값으로 변환
let x = '3';
let y = '1';
typeCh = Number(x) + Number(y)
console.log(typeCh);

// int 값을 string 숫자로 변환
let a = 20;
let b = 21;
console.log(String(a) + String(b))

// 변수의 타입 확인하기 (python type(variable))
console.log(typeof a);
console.log(typeof String(a));

// 불린형 (Truthy)
let ch = 0;  // false
let ch1 = ''; // false
let ch2 = 13; // true
let ch3 = 'dd'; // true
console.log(Boolean(ch3));