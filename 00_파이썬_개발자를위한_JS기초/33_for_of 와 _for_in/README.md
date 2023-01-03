## 배열과 객체를 다룰 때에는 특별한 형태의 for문을 사용할 수 있다
***
> ## 배열

```
let topics = [
  '프로그래밍 시작하기 in Python',
  'Git',
  '소프트웨어 이해하기',
  '프로그래밍 시작하기' in JavaScript',
  '데이터 분석과 시각화'
];
```

> ### 인덱스를 활용해서 배열을 도는 방법
```
for (let i = 0; i < topics.length; i++) {
  console.log(topics[i]);
}
```

> ### for .. of 문법을 사용해서 배열을 도는 방법
- 요소를 담을 변수(topic)를 선언하고, of 뒤에 배열(topics)을 써주면 된다
```
for (let topic of topics) {
  console.log(topic);
}
```

*** 
> ## 객체

```
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
```

> ### 객체에 있는 모든 Property에 접근하는 방법
- codeit 객체의 Property Name들이 변수 key에 하나씩 할당된다.

```
for (let key in codeit) {
  console.log(codeit[key]);
}
```

파이썬에서는 이렇게 실행 했었죠.
```
data_dic = {
  'name': '코드잇',
  'bornYear': 2017,
  'founders': ['강영훈','이윤수'],
  'worstTopic': null,
  'bestTopic': {
    'title': '프로그래밍 시작하기 in JavaScript',
    'language': 'JavaScript'
}

for key,value in data_dic.items():
    print(key,value)
```