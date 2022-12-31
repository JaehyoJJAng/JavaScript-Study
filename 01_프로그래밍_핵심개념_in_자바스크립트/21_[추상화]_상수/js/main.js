// 상수 (constant)

/**
 * 변수에 들어갈 자료형이 아직 결정되지 않았거나 , 일정하지 않았을 경우
 * null 값을 변수에 할당하는 것이 좋음
 * 그러나, 빈 값을 표현하면서 변수에 일정하게 들어갈 값 , 자료형을 간접적으로 표현하고 싶을 경우에는 아래와 같이 작성할 수 있음
 * === === === === === ===
 * - 문자열
 * > var text = '';
 * === === === === === ===
 * - 숫자
 * > var num = 0;
 * === === === === === ===
 * - 값 또는 자료형이 아직 정해지지 않음
 * var unknown = null;
 */

{
  const PI = 3.14; /**
   * 원주율
   * 변하지 않고 일정한 값을 유지하는 변수 (상수)
   * (const 키워드 사용)
   * 상수의 값을 보호할 수 있음
   * 상수는 변수명 지을 때 대문자 + '_'로 작명하는게 암묵적인 규칙 (상수와 변수를 구분하기 위함)
   */
  
  var redius = 0; // 반지름  => 값이 없는채로 변수를 할당할 경우 변수 상태는 undefined 상태 
  
  // 원의 넓이를 계산하는 함수
  var calculateArea = () => {
    return pi * radius * radius;
  }

  // 반지름에 따른 원의 넓이를 출력하는 함수
  var printArea = () => {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${Number(calculateArea())}`;
  }

  radius = 4;
  console.log(printArea());

  radius = 7;
  console.log(printArea());

  radius = 8;
  console.log(printArea());
}
