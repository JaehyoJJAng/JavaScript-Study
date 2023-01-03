let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
  // 오늘 날짜와 재상의 입사 일간의 차이를 먼저 구하기
  var timeDiff = today.getTime() - jaeSangStart.getTime();

  // 타임스탬프는 단위가 밀리초 이기 때문에 , 이것을 일수로 변환
  var dayDiff = timeDiff / 1000 / 60 / 60 / 24;
  
  console.log(`오늘은 입사한 지 ${dayDiff + 1}일째 되는 날 입니다.`);
}
workDayCalc(jaeSangStart);