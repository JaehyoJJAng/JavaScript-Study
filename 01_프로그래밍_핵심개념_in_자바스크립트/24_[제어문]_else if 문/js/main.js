{
  var temperature = 1;

  if (temperature <= 0) {
    console.log('물이 업니다.');
  }
  else {
    console.log('물이 얼지 않습니다');
  }
}

console.log()

{
  /**
   * 두 가지 이상의 조건이 있는 경우 else if 사용
   */
  var temperature = 2;
  
  if (temperature <= 0) {
    console.log('물이 업니다.');
  }
  else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다');    
  }
  else if (temperature < 150) {
    console.log('물이 끓습니다');
  }
  else {
    console.log('물이 모두 수증기가 되었습니다');
  }
};