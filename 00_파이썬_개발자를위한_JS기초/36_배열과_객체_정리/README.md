## 배열
배열(array)은 여러 값을 일렬로 저장하는 것입니다. (파이썬의 리스트와 비슷합니다.)

> ### 선언
- 대괄호로 선언합니다.

```
let topics = [
  '프로그래밍 시작하기 in Python',
  'Git',
  '소프트웨어 이해하기',
  '프로그래밍 시작하기 in JavaScript',
  '데이터 분석과 시각화',
];
```

> ### 인덱싱
- 0, 1, 2 같은 요소의 위치를 인덱스라고 하고, 인덱스로 요소를 접근하는 과정을 인덱싱이라고 합니다.

```
let topics = [
  '프로그래밍 시작하기 in Python',
  'Git',
  '소프트웨어 이해하기',
  '프로그래밍 시작하기 in JavaScript',
  '데이터 분석과 시각화',
];

console.log(topics[0]); // 프로그래밍 시작하기 in Python
console.log(topics[2]); // 소프트웨어 이해하기
console.log(topics[6]); // undefined
console.log(topics[-1]); // undefined
```

배열의 길이는 .length로 접근할 수 있습니다. 배열 길이는 마지막 요소에 접근할 때 많이 사용합니다.

```
console.log(topics.length); // 5
console.log(topics[topics.length-1]); // 데이터 분석과 시각화
```

slice() 함수를 통해 두 인덱스 사이에 있는 요소들을 잘라낼 수도 있습니다.

```
console.log(topics.slice(1, 4));
console.log(topics.slice(3));
console.log(topics.slice());
```

```
['Git', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript']
['프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화']
['프로그래밍 시작하기 in Python', 'Git', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화']
```
첫 번째 파라미터는 시작 인덱스, 두 번째 파라미터는 끝 인덱스인데요. (끝 인덱스에 있는 요소는 슬라이싱에 포함되지 않습니다.) 두 번째 파라미터를 생략하면 배열 끝까지 슬라이싱되고 파라미터를 전부 생략하면 배열 전체가 슬라이싱됩니다.

> ### 배열 수정하기
- 배열 끝에 요소를 추가하거나 삭제할 때는 push()와 pop(), 중간에 요소를 추가하거나 삭제할 때는 splice() 함수를 사용하면 됩니다. (물론 splice()로도 배열 끝에 추가하거나 삭제할 수 있지만 문법이 더 복잡하고 덜 직관적입니다.)

```
let topics = [
  '프로그래밍 시작하기 in Python',
  'Git',
  '소프트웨어 이해하기',
  '프로그래밍 시작하기 in JavaScript',
  '데이터 분석과 시각화',
];

// push(item1, item2, ...)
topics.push('머신 러닝 기본기');
console.log(topics);

// pop()
topics.pop();
console.log(topics);

// splice(start, deleteCount, item1, item2, ...);
topics.splice(2, 0, 'React 웹 개발 시작하기'); // 인덱스 2 위치에 'React 웹 개발 시작하기' 삽입
console.log(topics);

topics.splice(1, 2); // 인덱스 1에서부터 요소 2개 삭제
console.log(topics);
```

```
['프로그래밍 시작하기 in Python', 'Git', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화', '머신 러닝 기본기']
['프로그래밍 시작하기 in Python', 'Git', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화']
['프로그래밍 시작하기 in Python', 'Git', 'React 웹 개발 시작하기', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화']
['프로그래밍 시작하기 in Python', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화']
```

기존 요소를 수정할 때는 그냥 인덱싱을 사용하면 됩니다.

```
let topics = [
  '프로그래밍 시작하기 in Python',
  'Git',
  '소프트웨어 이해하기',
  '프로그래밍 시작하기 in JavaScript',
  '데이터 분석과 시각화',
];

topics[0] = '파이썬 응용하기';
console.log(topics);
```

```
['프로그래밍 응용하기', 'Git', '소프트웨어 이해하기', '프로그래밍 시작하기 in JavaScript', '데이터 분석과 시각화']
```

> ### 배열과 반복문

```
let topics = [
  '프로그래밍 시작하기 in Python',
  'Git',
  '소프트웨어 이해하기',
  '프로그래밍 시작하기 in JavaScript',
  '데이터 분석과 시각화',
];
```

일반 for 반복문

```
for (let i = 0; i < topics.length; i++) {
  console.log(topics[i]);
}
```

```
프로그래밍 시작하기 in Python
Git
소프트웨어 이해하기
프로그래밍 시작하기 in JavaScript
데이터 분석과 시각화
```

for...of 반복문

```
for (let topic of topics) {
  console.log(topic);
}
```

```
프로그래밍 시작하기 in Python
Git
소프트웨어 이해하기
프로그래밍 시작하기 in JavaScript
데이터 분석과 시각화
```
변수(topic)에 배열 요소가 하나씩 할당됩니다.

***
## 객체
- 객체(object)는 키와 값의 쌍을 저장합니다. (파이썬의 딕셔너리와 비슷합니다.)

> ### 선언
- 중괄호로 선언합니다.

```
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  founders: ['강영훈', '이윤수'],
  worstTopic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript',
  },
};
```

> ### 프로퍼티
자바스크립트에서는 키와 값의 쌍 하나를 프로퍼티라고 하는데요. 따라서 키를 프로퍼티 네임(property name) 또는 프로퍼티 이름, 값을 프로퍼티 밸류(property value) 또는 프로퍼티 값이라고 부르기도 합니다.

프로퍼티 이름은 항상 문자열인데요. 일반적으로 따옴표 없이도 사용할 수 있지만 아래의 경우 꼭 따옴표를 사용해야 합니다.

프로퍼티 이름이 알파벳 문자, 언더바 기호(_), 또는 달러 기호($)로 시작하지 않음 (예: @name)
중간에 띄어쓰기나 하이픈 기호가 들어감 (예: worst course)
반면 프로퍼티 값은 아무 자료형일 수 있어요. 문자열, 숫자형, 배열, null, 심지어 객체 자체도 값이 될 수 있습니다.


> ### 프로퍼티 접근

```
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  founders: ['강영훈', '이윤수'],
  worstTopic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript',
  },
};
```

> ### 점 표기법

```
console.log(codeit.name); // 코드잇
```

> ### 대괄호 표기법

```
console.log(codeit['name']); // 코드잇
```

아래 경우에는 꼭 점 표기법이 아닌 대괄호 표기법을 사용해야 합니다.
- 따옴표로 감싸야 하는 프로퍼티 이름일 때
- 변수로 프로퍼티에 접근할 때

> ### 변수로 프로퍼티 접근

```
let propertyName = 'founders';
console.log(codeit[propertyName]); // ['강영훈', '이윤수']
```

> ### 프로퍼티 연결

```
console.log(codeit.bestTopic.title); // 프로그래밍 시작하기 in JavaScript
```

> ### 프로퍼티가 없을 경우

```
console.log(codeit.members); // undefined
```

> ### 프로퍼티 존재 여부 확인

```
console.log('bestTopic' in codeit); // true;
console.log('members'in codeit); // false
```

> ### 프로퍼티 추가, 수정, 삭제

```
codeit.color = 'purple'; // color 프로퍼티 추가
codeit.bornYear = 2016; // bornYear 프로퍼티 수정
delete codeit.name; // name 프로퍼티 삭제

console.log(codeit);
```

```
{
  bornYear: 2016,
  founders: ['강영훈', '이윤수'],
  worstTopic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript'
  },
  color: 'purple'
}
```

> ### 메소드
프로퍼티 값이 함수일 수도 있는데요. 함수 프로퍼티는 메소드라고 부릅니다.
정의된 함수를 프로퍼티 값으로 설정해도 되고,

```
function welcome(name) {
  console.log(`코드잇에 오신걸 환영합니다 ${name}님!`);
}

let codeit = {
  name: '코드잇',
  bornYear: 2017,
  founders: ['강영훈', '이윤수'],
  worstTopic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript',
  },
  greet: welcome,
};
```
프로퍼티에서 바로 정의해도 됩니다. 바로 정의할 경우 프로퍼티 이름이 함수 이름이 되기 때문에 function 키워드 뒤에 함수 이름을 정의할 필요가 없습니다.

```
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  founders: ['강영훈', '이윤수'],
  worstTopic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript',
  },
  greet: function (name) {
    console.log(`코드잇에 오신걸 환영합니다 ${name}님!`);
  },
};
```
메소드를 호출할 때는 다른 일반 프로퍼티에 접근하듯이 접근해서 괄호를 써주면 됩니다. 보통은 점 표기법을 사용하지만 대괄호 표기법도 사용할 수는 있습니다.

```
codeit.greet('재민'); // 코드잇에 오신걸 환영합니다 재민님!
codeit['greet']('재민'); // 코드잇에 오신걸 환영합니다 재민님!
```

> ### 객체와 반복문
- 객체의 모든 프로퍼티에 접근하고 싶을 때는 for...in 반복문을 사용합니다.

```
let codeit = {
  name: '코드잇',
  bornYear: 2017,
  founders: ['강영훈', '이윤수'],
  worstTopic: null,
  bestTopic: {
    title: '프로그래밍 시작하기 in JavaScript',
    language: 'JavaScript',
  },
};

for (let key in codeit) {
  console.log(key);
  console.log(codeit[key]);
}
```

```
name
코드잇
bornYear
2017
founders
['강영훈', '이윤수']
worstTopic
null
bestTopic
{title: '프로그래밍 시작하기 in JavaScript', language: 'JavaScript'}
```

변수(key)에 객체 키(프로퍼티 이름)가 하나씩 할당됩니다. 배열은 for...of, 객체는 for...in을 사용한다는 점 기억해 주세요!