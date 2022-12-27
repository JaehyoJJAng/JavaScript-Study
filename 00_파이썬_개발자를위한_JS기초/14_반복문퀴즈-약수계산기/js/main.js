function WhilePrintDivisor(number) {
  // Using While
  let whileCount=1;
  let divisorCount=0;
  while (whileCount <= number) {
    let numCheck = (number % whileCount);
    if (numCheck === 0) {
      console.log(whileCount)
      divisorCount++ 
    }
    whileCount += 1
  }
  console.log(`${number}의 약수는 총 ${divisorCount}개입니다.`)
}

function ForPrintDivisor(number) {
  // Using For
  let divisorCount = 0;
  for (let forCount=1; forCount <= number; forCount++) {
    if ((number % forCount) === 0)  {
      console.log(forCount);
      divisorCount++
    }
  }
  console.log(`${number}의 약수는 총 ${divisorCount}개입니다.`)
}
WhilePrintDivisor(number=180);
ForPrintDivisor(number=180);