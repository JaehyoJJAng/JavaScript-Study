// 반복문 ( loop statement )
 
/**
 * for (초기화부분; 조건부분; 추가동작부분) {동작부분}; 
 * 얼마만큼 반복할 것 인지에대해 생각해라
 */

{
  let forCount = 1;
  for (forCount;forCount <= 10; forCount++) {
    console.log(forCount);
  };
}

{
  let forCount = 0;
  for (forCount;forCount < 10; forCount++) {
    console.log('코드잇 최고!');
  };
}


// 하다가 궁금해서 파이썬의 range() 함수를 자바스크립트의 for 문으로 구현 해봤음.
{
  var range = (startNum,endNum) => {
    // 배열 초기값
    var arr = Array();

    // 마지막 값 - 시작 값
    var length = endNum - startNum
    
    // length 만큼 배열 순회하며 arr에 시작 값 push()
    for (var i = 0;i < length; i++) {
      arr.push(startNum)
      startNum++
    }
    console.log(arr);
  }
  range(startNum=1,endNum=10);
}