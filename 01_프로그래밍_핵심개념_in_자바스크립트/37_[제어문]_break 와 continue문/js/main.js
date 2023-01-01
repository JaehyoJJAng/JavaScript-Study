{
  // break (while)
  let i = 1;
  while (i <= 10) {
    if (i === 5) {
      console.log(i);
      console.log('break를 만나 종료됩니다')
      break;
    }
    i ++
  } 
}

console.log()

{
  // break (for)
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      console.log(i);
      console.log('break를 만나 종료됩니다')
      break;
    }
  } 
}

console.log()

{ 
  // continue (while)
  var i = 0;
  while (i <= 10) {
    if (i === 5 || i === 8) {
      console.log('continue를 만나 되돌아갑니다');
      i ++
      continue
    } else {
      console.log(i);
      i ++
    }
  }
}

console.log()

{ 
  // continue (for)
  for (let i = 0; i < 10; i++) {
    if (i === 5 || i === 6) {
      console.log('continue를 만나 되돌아갑니다')
      continue;
    } else {
      console.log(i);
    }
  } 
}