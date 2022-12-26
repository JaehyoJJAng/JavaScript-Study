/**
 * python : None
 * null -> 값이 없다는 걸 의도적으로 표기할 때
 * undefined -> 우리가 직접 값을 표기하기보다 , 코드를 실행 했는데 값이 없는 경우
 */

/**
 * Python
 * Var = ''
 * Var = 0
 * Var = []
 * Var = {}
 * 
 * JS
 * let codeit;
 */

let codeit;
// console.log(typeof codeit); // undefined

let codeit2 = null;
// console.log(codeit2); // null

// 함수가 어떤 값을 리턴하지 않으면 undefined를 리턴함
function noRetrunValue() {
  console.log('이 함수는 아무것도 리턴하지 않습니다');
}
let x = noRetrunValue();
console.log(typeof x); // null

// !! null | undefined : 값이 없는 상태이므로 Falthy 하다.
console.log(Boolean(null)); // false
console.log(Boolean(undefined));  // false