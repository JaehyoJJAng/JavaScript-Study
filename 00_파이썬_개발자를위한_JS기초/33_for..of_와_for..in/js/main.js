{
  // 배열 순회하기
  // for (초기화 변수;조건;증감식) {} 와 for (let 할당변수 of 배열) {}
  let topics = [
    '프로그래밍 시작하기 in Python',
    'Git',
    '소프트웨어 이해하기',
    '프로그래밍 시작하기 in JavaScript',
    '데이터 분석과 시각화'
  ];

  // 인덱스를 활용해서 배열 순회
  for (let i = 0;i < topics.length; i++) {
    console.log(topics[i]);
  }

  // for .. of 문법 사용하여 배열 순회
  for (let topic of topics) {
    console.log(topic);
  }
}

{
  // 오브젝트 순회하기
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstTopic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };

  let bestTopics = Array()

  for (let key in codeit) {
    if (key === 'bestTopic') {
      console.log(key);
      console.log(codeit[key]);
      bestTopics.push(codeit[key]);
    }
  }
  console.log(bestTopics);
}