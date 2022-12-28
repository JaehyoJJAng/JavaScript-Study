{
  // 배열 정의
  let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];

  function printCelsius(arr) {
    // 빈 배열 선언
    let fahrenheitTemps = []

    for (let idx=0;idx < arr.length; idx ++) {
      fahrenheitTemps.push((arr[idx] * 9 / 5) + 32);
      
    }
    return fahrenheitTemps
  }

  let fahrenheitTemps = printCelsius(arr=celsiusTemps);
  console.log(fahrenheitTemps);
}