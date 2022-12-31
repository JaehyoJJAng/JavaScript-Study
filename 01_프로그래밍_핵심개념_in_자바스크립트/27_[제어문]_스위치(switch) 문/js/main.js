// Switch 문

/**
 * 당신은 등산을 하던 중 갑작스레 산불이 발생해 대피 중입니다.
 * 그러던 중 산중턱에서 다친 동물 4마리를 만났습니다
 * 이미 체력이 많이 떨어진 당신
 * 이 동물 중 단 한마리만 구출할 수 있습니다
 * 과연 당신의 선택은?
 * 1.토끼   2. 고양이   3. 강아지   4. 거북이
 */

/** switch (비교할 값) {
  * case 조건값_1:
  *  동작부분;
  *  break;
  * case 조건값_2:
  *  동작부분;
  *  break
  * default: // 비교할 값이 모든 조건 값과 일치하지 않는 경우 실행
  *  동작부분;
  }
*/


var range = (start,end) => {
  var arr = Array();
  var arrLength = end - start;

  for (let i=0;i < arrLength;i++) {
    arr[i] = start;
    start++
  }
  return arr
}

var myChoice = (number) => {
  switch(number) {
    case 1:
      console.log('토끼를 선택한 당신 ...');
      break
    case 2:
      console.log('고양이를 선택한 당신 ...');
      break
    case 3:
      console.log('강아지를 선택한 당신 ...');
      break
    case 4:
      console.log('거북이를 선택한 당신 ...');
      break
    default:
      console.log(`1에서 4사이의 숫자를 선택해 주세요!\n남은 횟수 : ${forCount}`)        
  }
}

myChoice(number=3);