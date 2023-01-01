{
  // for
  let current = 1; // 현재 항
  let previous = 0; // 직전 항

  for (let i = 1; i <= 50; i++) {
    console.log(current);

    let temp = previous; // temp 변수에 previous(직전항)을 임시로 저장
    previous = current
    current = current + temp;
  }
}

{
  // while
  let current = 1; // 현재 항
  let previous = 0; // 직전 항
  let i = 1; // 초기 값
  while (i <= 50) {
    console.log(current);
    var temp = previous;
    previous = current;
    current = current + temp;
    i ++;
  }
}