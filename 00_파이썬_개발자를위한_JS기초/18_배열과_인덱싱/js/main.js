// 배열 정의하기

{
  let arr = [];
}

// 배열에 요소 추가하기 (1),
{
  let arr = ['프로그래밍','파이썬','자바스크립트'];
}

// 배열에 요소 추가하기 (2)
{ 
  let arr = [];
  arr[0] = '프로그래밍';
  arr[1] = '파이썬';
  arr[2] = '자바스크립트';
}

// 인덱싱 하기
{
  let arr = ['프로그래밍','파이썬','자바스크립트'];
  console.log(arr[0]) // 0번째 요소 추출 : 프로그래밍
  console.log(arr[1]) // 1번째 요소 추출 : 파이썬
}

// 배열의 길이 가져오기
{
  let arr = ['프로그래밍','파이썬','자바스크립트'];
  console.log(arr.length);
}

// 배열의 마지막 요소 가져오기
{
  let arr = ['프로그래밍','파이썬','자바스크립트'];
  
  lastIndex = arr[arr.length - 1];
  console.log(lastIndex);
}

// 인덱스 슬라이싱
{
  let arr = ['프로그래밍','파이썬','자바스크립트'];
  console.log(arr.slice(0,3));
  console.log(arr.slice(1));
  console.log(arr.slice());
}

// For문 사용하여 배열 순회하기
{
  let arr = ['프로그래밍','파이썬','자바스크립트'];
  for (let forCount=0;forCount < arr.length;forCount++) {
    topic = arr[forCount];
    console.log(topic)
  } 
}