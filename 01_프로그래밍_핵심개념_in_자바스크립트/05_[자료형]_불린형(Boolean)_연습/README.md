```
// 불린 (Boolean)
console.log(2 < 1 && 'Codeit' !== 'Codeit');
```

2 < 1는 false고, 'Codeit' !== 'Codeit'도 false이기 때문에 이 코드는 false && false가 되어서 실행했을 때 false가 출력됩니다. 
그런데 사실, AND연산을 할 때 왼쪽이 false일 경우 오른쪽은 볼 필요도 없이 결과가 false입니다. AND연산은 양쪽이 모두 true인 경우에만 true가 리턴되기 때문이죠!
그래서 불린 연산자가 하나만 있을 때는 연산자를 기준으로 왼쪽부터 순서대로 확인하면 됩니다.

그럼 이 코드는 어떨까요?

```
// 불린 (Boolean)
console.log(7 !== 7 || 4 < 3);
```

이번에는 OR 연산인데요. OR연산의 경우에는 AND연산과 반대로 왼쪽이 true라면, 오른쪽은 볼 필요도 없이 결과는 true가 됩니다.
그런데 마침 OR연산의 왼쪽, 그러니까 7 !== 7이 false이기 때문에 이제 오른편도 확인해야 하네요.
4 < 3은 false이기 때문에 결과적으로 위 연산은 false OR false가 돼서 코드를 실행해보면 false가 출력됩니다.

마지막으로 하나만 더 해볼까요?

```
// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
```

이번에는 변수까지 활용해서 첫 번째 x라는 변수에 3이라는 값을 저장했습니다.
이번에는 조금 복잡해 보이니깐 여기 아래 코드를 하나 더 복사해서 부분부분 같이 수정하면서 확인해 봅시다.

```
// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(x > 4 || !(x > 2));
```

이번에도 순서대로 왼쪽의 비교연산부터 정리해 봅시다.<br>
x > 4는 3 > 4가 되죠?

```
// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(3 > 4 || !(x > 2));
```

3 > 4는 false이기 때문에 오른쪽도 살펴봐야합니다.

```
// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(x > 2));
```

다음은 NOT연산이 있는데요. 그런데 어떤 값을 NOT연산 해야되는지 아직은 모르니깐, 괄호 안의 비교 연산을 정리해 봅시다.<br>x > 2는 3 > 2가 되죠?

```
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(3 > 2));
```

3 > 2는 true입니다.

```
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !true);
```

그럼 이제 NOT연산도 정리해 줍시다.

```
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || false);
```

결과적으로 위 연산은 false || false가 돼서

코드를 실행하면 false가 두 번 출력되는걸 확인할 수 있습니다.

```
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false);
```

```
false
false
```
