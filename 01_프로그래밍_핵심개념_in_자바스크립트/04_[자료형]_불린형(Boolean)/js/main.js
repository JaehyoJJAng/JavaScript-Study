// 불린 (Boolean)
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(3 >= 2);  // true
console.log(3 <= 3);  // true
console.log(3 === 3); // true
console.log(3 !== 3); // false

// Boolean 연산 (and)
console.log(true && true);  // true
console.log(true && false); // false

// Boolean 연산 (or)
console.log(true || true);   // true 
console.log(true || false);  // true

// Boolean 연산 (not)
console.log(!(true));  // false
console.log(!true);    // false
console.log(!(false)); // true
console.log(!false);   // true
console.log(!(2 > 1)); // false
console.log(!(2 < 1)); // true

// not 연산을 중첩해서 사용 가능
console.log(!(!(true))) // true