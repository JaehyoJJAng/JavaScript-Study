## 배열과 인덱싱
> 기본 자료형
-   숫자형
-   문자열
-   불린형
-   null
-   undefined

> 심화 자료형
-   배열(array)
-   객체(object)

### 배열 (array)
-   파이썬 List와 비슷하다

> 배열 정의

```
let topics = ['프로그래밍 시작하기 in Python','Git',
'소프트웨어 이해하기','프로그래밍 시작하기 in JavaScript' ]
```

> 요소 뽑기 (인덱싱)

```
console.log(topics[0]) // 프로그래밍 시작하기
```

> for로 순회하며 배열 내 요소 가져오기

```
// for로 배열 순회 돌기
for (let idx =0; idx < topics.length; i++) {
    let topic = topics[idx];
}
```

> 배열의 길이 가져오기

```
console.log(topics.length);
```

> 배열의 맨 마지막 요소 가져오기<br>
> 인덱스는 0부터 시작하기에 topics.length - 1 임

```
console.log(topics[topics.length - 1]);
```

<strong>자바스크립트에서는 인덱스가 배열 범위를 벗어나면 undefined를 return함</strong>

> 인덱스 슬라이싱

```
// Python : topics[1:4]
// JS : topics.slice(1,4);

console.log(topics.slice(1,4)); // 인덱스 1 , 2 , 3 요소 추출 (끝 인덱스 포함 안되는 것은 파이썬과 동일)

console.log(topics.slice(3)); // 3번째 인덱스 부터 끝

console.log(topics.slice()); // 배열 전체 슬라이싱
```