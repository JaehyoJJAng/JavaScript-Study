## 스위치 문
switch문은 if문과 비슷한데, 간단한 케이스가 여러 개일 때 주로 사용합니다.

```
let fruit = '포도';

/* 과일 fruit에 따라 메시지를 출력해 줍니다. */
switch (fruit) {
  case '사과':
    console.log('사과는 1kg에 12,000원입니다.');
    break;
  case '바나나':
    console.log('바나나는 1kg에 6,000원입니다.');
    break;
  case '오렌지':
    console.log('오렌지는 1kg에 10,000원입니다.');
    break;
  case '포도':
    console.log('포도는 1kg에 20,000원입니다.');
    break;
  default:
    console.log('과일을 찾지 못했습니다');
}
```

```
포도는 1kg에 20,000원입니다.
```

과일 종류에 따라 메시지를 출력해 주는 코드인데요.

fruit의 값으로 switch(스위치)를 만들고
fruit의 값이 case에 있는 값과 일치하면 그 case문이 실행됩니다. case문이 종료되면 이어서 그다음 case에 일치하는지 확인하는데요. case문이 종료되면 바로 switch문을 나가도록 break라는 것을 사용해 줬습니다. (break문에 대한 내용은 다음 섹션을 참고해 주세요.)
만약 아무 case문도 실행이 안 됐다면 default문이 실행되는데요. else문과 비슷하게 나머지 케이스를 처리한다고 생각하시면 됩니다.
switch는 항상 값이 일치(===) 하는지를 비교하기 때문에 복잡한 연산은 사용할 수 없지만 많은 케이스를 효율적으로 처리할 수 있습니다.

switch문에 대해 더 알고 싶으시다면 아래 레슨을 참고해 보세요!

[스위치문1](https://www.codeit.kr/learn/courses/intro-to-programming-in-javascript/3419)
[스위치문2](https://www.codeit.kr/learn/courses/intro-to-programming-in-javascript/3420)

***
## Break 문
break문은 for, while, switch문을 미리 종료하고 싶을 때 사용합니다. break문을 만나면, 그 순간 for, while 또는 switch문이 종료됩니다.

```
let fruit = '포도';

/* 과일 fruit에 따라 메시지를 출력해 줍니다. */
switch (fruit) {
  case '사과':
    console.log('사과는 1kg에 12,000원입니다.');
    break;
  case '바나나':
    console.log('바나나는 1kg에 6,000원입니다.');
    break;
  case '오렌지':
    console.log('오렌지는 1kg에 10,000원입니다.');
    break;
  case '포도':
    console.log('포도는 1kg에 20,000원입니다.');
    break;
  default:
    console.log('과일을 찾지 못했습니다');
}
```

```
포도는 1kg에 20,000원입니다.
```

이전 예시에서는 일치하는 case를 찾으면 바로 switch문을 빠져나오도록 break문을 사용했었습니다.

for나 while문에도 동일하게 사용할 수 있는데요.

```
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 7) {
    break;
  }
}
```

```
1
2
3
4
5
6
7
```

```
let i = 1;

while (i <= 10) {
  console.log(i);
  if (i === 7) {
    break;
  }
  i++;
} 
```

```
1
2
3
4
5
6
7
```
원래는 1부터 10까지 반복돼야 하는데, 중간에 break를 마주치기 때문에 숫자가 7까지만 출력되고 반복문이 종료됩니다.

프로그래밍을 하다 보면 특정 조건을 만족하면 바로 반복문에서 나오고 싶을 때가 있을 텐데, 그럴 때 break문을 사용하시면 됩니다.

***
## continue 문
continue문은 반복문(for, while)에 사용하는 것인데요. break와 비슷한 면이 있습니다. break는 반복문 전체를 종료했다면, continue는 현재 반복문을 한 번 건너뛰는 겁니다. 이게 무슨 뜻인지 설명해 드릴게요.

```
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

```
1
3
5
7
9
```

만약 i를 2로 나눈 나머지가 0이면, 즉 i가 짝수이면 continue문을 실행하는데요. 그러면 현재 i에 해당하는 반복문은 바로 종료되고 다음 반복문으로 넘어가기 때문에 console.log(i)가 실행되지 않습니다. i가 짝수이면 console.log(i)가 실행되지 않기 때문에 홀수만 출력되는 거죠.

for문을 while문으로 바꾸면 이렇게 쓸 수 있습니다.

```
let i = 1;

while(i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
```

```
1
3
5
7
9
```

continue를 마주치면 마지막 줄의 i++를 건너뛰게 되기 때문에 if문 안에도 i++가 필요한 겁니다.

continue는 특정 조건을 만족할 경우, 현재 반복문을 한 번 건너뛰고 싶을 때 사용하시면 됩니다.

break나 continue문에 대해 더 알고 싶으시다면 아래 레슨을 참고해 보세요!

[Break | Continue](https://www.codeit.kr/learn/courses/intro-to-programming-in-javascript/3429)