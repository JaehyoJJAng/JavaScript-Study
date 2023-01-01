{
  // while 문
  var printDivisor = (maximum) => {
    var whileCount = 0;
    var divisorCount = 0;
    
    while (whileCount <= maximum) {
      c = (maximum % whileCount);
      if (c === 0) {
        console.log(whileCount);
        divisorCount++;
      }
      whileCount++;
    }
    console.log(`${maximum}의 약수는 총 ${divisorCount}개입니다.`);
  }

  printDivisor(maximum=180);
}

{
  // for 문
  var printDivisor = (maximum) => {
    var forCount = 0;
    var divisorCount = 0;

    for (;forCount <= maximum;) {
      if ((maximum % forCount) === 0 ) {
        console.log(forCount);
        divisorCount += 1;
      }
      forCount ++ 
    }

    console.log(`${maximum}의 약수는 총 ${divisorCount}개입니다.`);
  }
  printDivisor(maximum=180);
}