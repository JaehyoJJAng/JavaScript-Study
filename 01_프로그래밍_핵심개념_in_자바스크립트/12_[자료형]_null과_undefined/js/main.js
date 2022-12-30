/**
 * null : 의도적으로 값이 없다는 걸 표현할 때 사용하는 값
 * undefined : 코드를 실행하면서 값이 없다는 것을 확인하는 값
 */

{
  var codeit;
  console.log(typeof codeit);  // undefined
}

{
  var codeit = null;
  console.log(codeit);  // null
}

// null과 undefined 비교해보기
console.log(null === undefined);  // false
console.log(null == undefined);   // true (null : false , undefined : false) => false(0) == false(0) : true

// 값을 임의적으로 null을 만들어야 하는 상황 실습해보기
{
  let cup;
  console.log(typeof cup); // undefined

  cup = '물';
  console.log(cup); // 물
  
  cup = null;
  console.log(cup); // null
}