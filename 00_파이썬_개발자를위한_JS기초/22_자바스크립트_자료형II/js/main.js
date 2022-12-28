function addElement(arr,element) {
  oldArr = arr;
  newLength = arr.push(element);
  console.log(`${arr[newLength-1]} 요소가 새로 추가되었습니다\n${arr}\n`);
  return arr
}

function deleteElement(arr) {
  lastElement = arr.pop();
  console.log(`마지막 요소 ${lastElement}가 삭제되었습니다`);
  return arr
}

// 배열 정의
let dataTypes = ['number', 'string', 'false', 'true', 'null', 'undefined'];

// 배열 끝에 'array'와 'object'를 추가해 주세요
// 여기에 코드를 작성하세요
dataTypes = addElement(arr=dataTypes,element='array');
dataTypes = addElement(arr=dataTypes,element='object');

// 배열의 마지막 요소 ('object')를 제거해 주세요
// 여기에 코드를 작성하세요
// console.log(dataTypes);
dataTypes  = deleteElement(arr=dataTypes);

// 배열 중간에 있는 'false', 'true'를 제거해 주세요
// 여기에 코드를 작성하세요
// console.log(dataTypes);
dataTypes.splice(2,2);
console.log(dataTypes);

// 'string' 바로 다음에 'boolean'을 추가해 주세요
// 여기에 코드를 작성하세요
// console.log(dataTypes);
dataTypes.splice(2,0,'boolean');
console.log(dataTypes);