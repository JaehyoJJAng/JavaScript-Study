/**
 * while (조건부분) {동작부분}
 */

{
  // for 문
  var range = (startNum,endNum) => {
    var arr = Array();
    var length = endNum - startNum;
    var forCount = 0;
    
    for (;forCount < length;) {
      arr.push(startNum);
      startNum++;
      forCount++;
    }
    console.log(arr);
  }

  range(startNum=1,endNum=10);
}

{
  // while 문
  var range = (startNum,endNum) => {
    var arr = Array();
    var length = endNum - startNum;
    var whileCount = 0;

    while (whileCount < length) {
      arr.push(startNum);
      startNum++;
      whileCount++;
    }
    console.log(arr);
  }

  range(startNum=1,endNum=10);
}

{
  // while 문
  let i = 30;
  while (i % 7 !== 0) {
    i++;
  }
  console.log(i);
}

{
  // for 문
  var i = 30;
  for (let b = true;b !== false;) {
    if (i % 7 !== 0) {
      i++
    }
    else {
      b = false;
    }
  }
  console.log(i);
}