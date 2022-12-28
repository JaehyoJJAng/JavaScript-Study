## 프로퍼티(Property) 접근하기
***
> ## Property에 접근하는 첫 번째 방법
- 대괄호 표기법
- 파이썬의 dictionary 자료형의 value를 가져올 때 처럼
- codeit['key'] 방식으로 Value를 추출
- 규칙을 어겨서 따옴표('')로 key를 감싸주어서 호출해야 하는 변수들은 꼭 대괄호 표기법을 사용해야 함
```
{
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

  console.log(codeit['founders']);
  console.log(codeit['@name']); // 점 표기법 사용 불가
}
```

<br>

> ## Property에 접근하는 두 번째 방법
- 점 표기법 사용
- 조금 더 간결함
```
{
    let codeit = {
  name: '코드잇',
  born Year: 2017,
  founders: ['강영훈','이윤수'],
  worst-Topic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript'
  },
};

  console.log(codeit.founders);
}
```

***
> ## Property 접근의 특이케이스
### property 안에 있는 property를 접근 하는 방법

bestTopic 프로퍼티의 값(value)는 하나의 객체이고, 그 안에 있는 title 프로퍼티의 값을 가져올 수 있는 방법
```
{
  let codeit = {
    name: '코드잇',
    born Year: 2017,
    founders: ['강영훈','이윤수'],
    worst-Topic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
};
```
점 표기법 + 대괄호 표기법

```
  console.log(codeit.bestTopic['title']);
```

Only 점 표기법


```
  console.log(codeit.bestTopic.title);
```

Only 대괄호 표기법

```
  console.log(codeit['bestTopic']['title']]);
```

***

> ## 없는 property에 접근하는 경우

```
console.log(codeit.members); 
console.log(codeit['members']);

> undefined 
: members 라는 필드는 코드를 실행할 때 찾지 못한 것이므로 null이 아닌 undefined임
```

> ## Object(객체)에 특정 Property가 있는지 없는지 확인 해야하는 경우

파이썬

```
var = ['안녕','바보','아니야']
var2 = '안녕하세요 이재효입니다'

if '안녕' in var:
    print('안녕 있어요')
if '이재효' in var2:
    print('이재효 있어요')
```

자바스크립트
```
check = ('members' in codeit); // false
check2 = ('worstTopic' in codeit); // true
if (check === true) {
  console.log('true');
}
else {
  console.log('false');
}
```

> ## 변수를 이용해서 Property에 접근하는 경우
- 변수 사용해서 프로퍼티 접근 시 , 무조건 대괄호 표기법을 사용해야 함
- codeit.propertyName 이라는 프로퍼티를 찾기 때문에 undefined 에러가 날 것임
```
  let propertyName = 'founders';
  console.log(codeit.propertyName);
  console.log(codeit[propertyName]);
```