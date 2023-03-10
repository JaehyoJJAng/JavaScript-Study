```
for (let i =1;i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`)
}
```

> ## 1. 추가동작부분을 꼭 채울 필요는 없다

```
for (let i = 0;i <= 10) {
  console.log(`${i} 코드잇 최고!`)
  i++ // i += 1
}
```

하지만, for문의 특성상, 이 추가동작부분이 있기 때문에 여기 동작부분에서는 실제로 반복하고자하는 내용들만 집중하고 어떤 조건과 관련된 부분은 이 소괄호에 집중하면서 좀 더 목적에 맞는 코드를 작성할 수 있게 되는 것이죠.

> ## 2. 초기화부분에서 생성한 변수는 for문의 로컬변수(Local Variable)이다.

```
for (let i = 1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}

console.log(i); // Error!
```

for문 안에서 생성한 로컬변수이기 때문에 for 반복문이 종료되고 나서 for 반복문 밖에서 변수를 사용하려고 하면 오류가 발생한다는 점.

아래 Block문 내에서 작성된 변수 또한 Block문 바깥에서 호출이 불가능
```
{
  var variable = 5;
  var string = 'str';
  var boolean = true;
}

// Error!
console.log(variable);
console.log(string);
console.log(boolean);
```

> ## 3. 초기화 부분도 반드시 채울 필요는 없다 , 단!

```
let i = 1;
for (; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}
```

위 코드 처럼 for 반복문의 로컬변수를 꼭 활용하지 않아도 반복문 밖에 있는 글로벌 변수를 활용해도 아무런 문제없이 같은 결과를 출력합니다.

단! <strong>for문의 소괄호 안쪽 가장 첫번째 세미콜론은 생략할 수 없습니다.</strong>

저 세미콜론은 초기화부분과, 조건부분을 구분하는 세미콜론이기 때문에 초기화 부분의 코드를 생략하더라도 세미콜론 만큼은 생략해선 안되는 것이죠!

for문의 소괄호 안쪽은 반드시 세미콜론 2개가 필요합니다. 그렇지 않으면 실행 오류를 만나게 된다는 점. 꼭 기억해 주세요!