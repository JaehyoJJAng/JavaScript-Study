## 실습 설명

이번 실습은 파이썬 코드의 도움 없이 자바스크립트 코드를 작성해 보는 실습입니다. 앞으로 이런 종류의 실습이 몇 개 있을 건데요. 결국 자바스크립트 코드를 처음부터 쓰는 연습도 필요하기 때문에 어려운 부분이 있어도 포기하지 마시고 토픽에서 배운 내용들, 그리고 힌트를 참고해서 천천히 풀어 보세요.

이번 실습은 아래와 같은 삼각형을 그려주는 함수를 구현하는 것입니다.

```
*
**
***
****
```

아래 요구사항에 맞게 함수를 구현해 주세요.

함수 이름은 printTriangle입니다.
함수는 삼각형 높이 height를 파라미터로 받습니다.
함수는 높이 height에 맞는 삼각형을 출력해 줍니다.
함수는 for문을 사용해야 합니다.
문자열 반복하기
i번째 행은 별이 i개 있는데요 (예: 4번째 행 = ****). 이럴 때는 문자열을 특정 횟수만큼 반복하면 됩니다. 파이썬이라면 * 연산자를 사용할 수 있을 것 같은데요.

```
star = '*'
print(star * 4) # ****
print('*' * 4) # ****
```

자바스크립트에서는 * 연산자를 문자열에 사용할 수 없습니다. 대신 repeat()이라는 함수를 사용하면 됩니다.

```
let star = '*';
console.log(star.repeat(4)); // ****
console.log('*'.repeat(4)); // ****
```

> repeat() 함수는 문자열 변수에 사용해도 되고, 문자열 자체에 사용해도 됩니다. repeat() 외에도 문자열을 다룰 때 유용하게 쓰이는 함수들이 몇 개 있는데요. 나머지는 다음 챕터에서 소개해 드릴 겁니다.

## 실습 결과

```
printEven(8);

0
2
4 
6 
8
```