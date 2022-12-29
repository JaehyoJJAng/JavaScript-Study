사용자가 따로 정의하지 않아도 자바스크립트가 미리 가지고 있는 객체들도 있는데요. 이런 객체들을 내장 객체, 영어로는 standard built-in objects라고 합니다. 개발자들이 많이 필요할 만한 기능들을 모아서 객체 형태로 저장해 놓은 건데요. 마치 파이썬의 스탠다드 라이브러리(standard library)와 비슷합니다. 이번 레슨에서는 Math라는 내장 객체와 Date라는 내장 객체를 살펴보면서 내장 객체에 대해 이해해 볼게요.


## Math
Math 내장 객체는 다양한 수학적 기능을 지원합니다. 프로그래밍을 하다 보면 기본적인 사칙연산보다 더 복잡한 수학적 기능이 필요할 때가 있는데요. 그럴 때는 Math 객체를 쓰면 됩니다. Math 객체는 자바스크립트에 내장돼있기 때문에 바로 사용할 수 있습니다.

```
/* PI 프로퍼티 */
console.log(Math.PI); // 3.141592653589793

/* floor() 내림 함수 */
console.log(Math.floor(3/2)); // 1

/* ceil() 올림 함수 */
console.log(Math.ceil(3/2)); // 2
```

PI 같은 프로퍼티도 있고, floor(), ceil() 같은 메소드도 있으니까 필요한 걸 골라 쓰면 되겠죠? Math 객체의 모든 프로퍼티와 메소드는 여기서 확인하실 수 있습니다.

***
## Date 
프로그래밍을 하다 보면 날짜를 다뤄야 하는 일이 많습니다. 그럴 때 사용할 수 있는 것이 바로 Date 객체인데요. 날짜 생성, 포매팅, 연산 등을 지원합니다.

> ## 날짜 생성
```
const date = new Date();

console.log(date);
```

```
Wed Jun 29 2022 13:00:00 GMT+0900 (Korean Standard Time)
```

이렇게 날짜를 생성하면 현재 날짜와 시간이 date에 저장됩니다. 참고로 시간대는 컴퓨터의 시간대 설정을 참고해서 자동으로 설정해 줍니다.

new Date() 같은 문법은 처음 만나보실 텐데요. Date는 일반적으로 날짜를 다루는 객체고, new Date()를 하면 특정 날짜를 저장하고 있는 객체를 하나 생성한다고 생각하시면 됩니다.

특정 날짜를 생성하려면 날짜 포맷을 문자열로 넘겨줘도 되고, 연도, 월, 날짜에 해당하는 숫자를 파라미터로 넘겨줘도 됩니다.

```
/* 문자열로 날짜 생성 YYYY-MM-DD */
const date1 = new Date('2022-06-29');

/* 문자열로 날짜 생성 YYYY-MM-DDThh:mm:ss */
const date2 = new Date('2022-06-29T13:00:00');

/* 숫자로 날짜 생성 new Date(year, month, date)
   주의: month는 월의 인덱스라서 1월은 0, 2월은 1, ..., 12월은 11입니다 */
const date3 = new Date(2022, 5, 29);

/* 숫자로 날짜 생성 new Date(year, month, date, hours, minutes, seconds)
   주의: month는 월의 인덱스라서 1월은 0, 2월은 1, ..., 12월은 11입니다 */
const date4 = new Date(2022, 5, 29, 13, 00, 00);
```

```
Wed Jun 29 2022 00:00:00 GMT+0900 (Korean Standard Time)
Wed Jun 29 2022 13:00:00 GMT+0900 (Korean Standard Time)
Wed Jun 29 2022 00:00:00 GMT+0900 (Korean Standard Time)
Wed Jun 29 2022 13:00:00 GMT+0900 (Korean Standard Time)
```
짜 객체는 항상 시간까지 저장하는데요. 생성할 때 시간을 생략하면 00:00:00으로 설정되니까 유의해 주세요.

> ## 날짜 포맷팅
저장해둔 날짜를 특정 포맷으로 보여주고 싶은 경우가 많은데요. 그럴 때는 아래 메소드들을 활용하시면 됩니다.

```
const date = new Date(2022, 5, 29, 13, 00, 00);

console.log(date.getFullYear());
console.log(date.getMonth()); // 주의: 0에서 시작
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
```

```
2022
5
29
13
0
0
0
```

문자열 포매팅(``)을 사용하면 날짜를 원하는 대로 출력할 수 있습니다.
```
console.log(`오늘은 ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일입니다.`);
```

```
오늘은 2022년 6월 29일입니다.
```

> ## 날짜 연산
두 날짜의 차이를 계산할 수도 있는데요. 날짜에서 다른 날짜를 빼면 차이를 밀리초로 계산해 줍니다.

```
const date1 = new Date(2022, 5, 29, 11, 30, 00);
const date2 = new Date(2022, 5, 29, 13, 00, 00);

const timeDifference = date2 - date1;

console.log(timeDifference);
```

```
5400000
```

이걸 이용해서 시간이 얼마나 흘렀는지 계산할 수도 있겠죠?

```
console.log(timeDifference + ' 밀리초');
console.log(timeDifference/1000 + ' 초');
console.log(timeDifference/1000/60 + ' 분');
console.log(timeDifference/1000/60/60 + ' 시간');
```
