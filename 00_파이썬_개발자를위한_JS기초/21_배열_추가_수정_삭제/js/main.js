// 배열의 맨 마지막에 새로운 요소 추가하기
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];

  newLength = topics.push('파이썬 크롤링');
  console.log(topics[newLength - 1]); // 파이썬 크롤링
}

// 배열의 맨 마지막 요소 삭제하기
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];
  
  deleteElement = topics.pop();
  console.log(deleteElement);
}

// 1번 인덱스 이후의 1개 요소 삭제
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];
  
  topics.splice(1,1);
  console.log(topics.length);
}

// 1번 인덱스 이후의 3개 요소 삭제
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];
  
  topics.splice(1,3);
  console.log(topics.length);
}

// 1번 인덱스 이후의 모든 요소 삭제
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];

  topics.splice(2);
  console.log(topics.length);
}

// 끝에서 두 번째 요소 삭제하기
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];

  topics.splice(topics.length - 1 , 1);
  console.log(topics);
}

// 2번째 인덱스 이후의 요소 1개 삭제 후 , 머신러닝 기본기 , 추천 시스템 요소 삽입
{
  let topics = ['프로그래밍','Git','소프트웨어 이해하기',
  '프로그래밍 시작하기 in js','데이터 분석과 시각화'];

  topics.splice(2,1,'머신러닝 기본기','추천 시스템');
  console.log(topics);
}