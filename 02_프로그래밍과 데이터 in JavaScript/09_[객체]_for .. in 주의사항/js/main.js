{
  let myObject = {
    '2': '알고리즘의 정석',
    '3': '컴퓨터 개론',
    '1': '자바스크립트 프로그래밍 기초'
  };

  for (var key in myObject) {
    console.log(myObject[key]);
  }
}

{
  let myObject = {
    300: '정수',
    1.2: '소수',
  }
  for (var key in myObject) {
    console.log(typeof key);
  }

  console.log(myObject['300']);
  console.log(myObject['1.2']);
}

