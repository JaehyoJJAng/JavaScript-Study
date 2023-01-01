{
  // for  
  for (let i=1;i < 10;i++) {
    for (let e=1;e < 10;e++) {
      console.log(`${i} * ${e} = ${i * e}`);
    }
  }
}


{
  // while
  let i = 1;
while (i < 10) {
  // 변수 r을 첫번째 while문 안에서 초기화
  let r = 1;
  while (r < 10) {
    console.log(`${i} * ${r} = ${i * r}`);
    r ++; 
  }
  i ++;
}
}