## 메소드
- 메소드를 사용할 때에는 Property Name(key)만 사용하고 함수 이름은 사용하지 않음
***
신기한 Property 정의해보기
- Property의 값은 함수가 될 수도 있음
- Property의 값이 함수가 될 경우 해당 Property를 '메소드' 라고 함.
- 함수를 greet 라는 propertyName 으로 추가하기
```
function welcome() {
  console.log('코드잇에 오신걸 환영합니다');
}

let codeit = {
  name: '코드잇',
  bornYear: 2017,
  founders: ['강영훈','이윤수'],
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  },
  greet: welcome,
};
```

메소드 호출해보기
- 일반 Property 처럼 접근 후 , 함수 처럼 () 열고 닫으면 됨.
- 함수를 정의 할 때 사용한 이름(welcome())이 아니라 Property Name을 사용해야 함
```
codeit.greet();
```

메소드에 파라미터 추가해보기

```
function welcome(name) {
  console.log(`안녕하세요! ${name} 님!`);
}

codeit.greet = welcome;
codeit.greet(name='이재효');
```

함수를 property 생성 할 때 같이 정의하기

```
codeit.greet = function welcome(name) {
  console.log(`안녕하세요 ${name} 님!`);
};

codeit.greet(name='이재효');
```

