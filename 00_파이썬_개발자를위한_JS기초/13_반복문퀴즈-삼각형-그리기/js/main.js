function printTriangle(height) {
  // Using For
  for (
    let forCount=1; forCount <= height; forCount++ //forCount+=1
    ) {
    console.log(String('*').repeat(forCount));
  }
}

function WhilePrintTriangle(height) {
  // Using While
  let whileCount = 1;
  let ext = '*';
  while (whileCount <= height) {
    console.log(ext.repeat(whileCount));
    whileCount += 1;
  }
}

// WhilePrintTriangle(height=3)

console.log('높이: 1');
printTriangle(height=1);

console.log('높이: 3');
printTriangle(height=3);

console.log('높이: 5');
printTriangle(height=5);