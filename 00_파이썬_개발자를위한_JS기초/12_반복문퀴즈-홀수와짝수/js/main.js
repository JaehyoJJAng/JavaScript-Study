function WhilePrintOddEven(number) {
  // while odd and even
  let whileCount = 0;
  while (whileCount <= number) {
    if (whileCount%2===0) {
      console.log(`Even : ${whileCount}`)
    } else {
      console.log(`Odd  : ${whileCount}`)
    }
    whileCount++
  }
}
// WhilePrintOddEven(number=10)

function WhilePrintOdd(number) {
  // only while odd
  let whileCount = 0;
  while (whileCount <= number) {
    if (whileCount % 2 === 1) {
      console.log(`홀수 : ${whileCount}`)
    }
    whileCount++
  }
}
// WhilePrintOdd(number=10)

function WhilePrintEven(number) {
  // only while even
  let whileCount = 0;
  while (whileCount <= number) {
    if (whileCount%2===0) {
      console.log(whileCount);
    }
    whileCount++
  }
}
// WhilePrintEven(number=10)

function ForPrintOdd(number) {
  for (let i = 0; i <= number; i++) {
    if (i%2===1) {
      console.log(i)
    }
  }
}
ForPrintOdd(number=10)

function ForPrintEven(number) {
  for (let i = 0; i <= number; i++) {
    if (i%2===0) {
      console.log(i)
    }
  }
}
ForPrintEven(number=10)