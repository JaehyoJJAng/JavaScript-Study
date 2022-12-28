## Object
***
Python - Dictionary
- Key:Value
```
my_family = {
  '엄마' : '김자옥',
  '아빠' : '이석진',
  '아들' : '이동민',
  '누나' : '이누나'
}

print(my_family['엄마']) # 김자옥
print(my_family['아빠']) # 이석진
```

***
> ## 자바스크립트 Object 생성하기
- 각 key:value 을 쉼표(,)로 구분
- 객체의 key는 문자열 타입이지만 , 꼭 따옴표('')를 입력하지 않아도 문자열로 인식
- 반면 객체의 value는 어떤 자료형으로 올 수도 있음

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

* 키와 값의 쌍 하나를 Property 라고 함
* key(Property Name) : value(Property Value) 

객체의 key에 대해서 따옴표('')를 생략할 수 있지만 , 예외 케이스도 있음
- 특수문자(!,@,#,..)가 있거나 , 띄어쓰기 , 하이폰 등이 있는 경우 따옴표('')로 감싸주어야 함
```
let codeit = {
  '@name': '코드잇',
  'born Year': 2017,
  founders: ['강영훈','이윤수'],
  'worst-Topic': null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript'
  },
};
```