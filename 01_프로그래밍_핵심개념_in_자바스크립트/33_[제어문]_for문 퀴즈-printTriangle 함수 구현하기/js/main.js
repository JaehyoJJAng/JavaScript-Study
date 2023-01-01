{
  // 방법 (1)
  var printTriangle = (height) => {
    // 여기에 코드를 작성하세요
    var forCount = 0;
    
    for (;forCount <= height;) {
      console.log('*'.repeat(forCount));
      forCount++;
    }
  }
}

{
  // 방법 (2)
  var printTriangle = (height) => {
    // 여기에 코드를 작성하세요
    var forCount = 0;
    var message = '';
    for (;forCount <= height;) {
      message += '*';
      console.log(message)
      forCount++;
    }
  }
} 

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

console.log('높이: 50');
printTriangle(50);