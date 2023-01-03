Date 객체 정보 수정하기
set으로 시작하는 다양한 메서드를 활용하면, 생성된 Date객체의 정보를 수정할 수도 있습니다.

(대괄호로 감싸진 요소들은 선택적인 요소입니다.)

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)(1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)

```
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002);
myDate.setMonth(6);
myDate.setDate(20);
```

***

> ## 간단하게 시간 정보 알아내기

간단하게 시간 정보를 표현하고 싶다면 아레와 같은 메소드를 활용해 볼 수도 있습니다.

```
let myDate = new Date();

console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)
```

toLocaleDateString(), toLocaleTimeString(), toLocaleString() 메소드는 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여줍니다. 
직접 코드를 실행해서 결과를 확인해 보세요!

***

> ## 똑똑한 DATE

Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있습니다. 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줍니다.

```
let myDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다

// 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
console.log(myDate) // Mon Feb 01 1988 00:00:00
```

***

> ## 지금 이 순간

Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환합니다. 이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것이죠!

```
let myDate = new Date();

console.log(Date.now() === myDate.getTime()); // true
```

위 코드를 보시면 알 수 있듯이 새로운 객체를 만들어서 getTime 메소드를 호출한 값과 일치한다는 사실을 확인할 수 있는데요.
새로운 객체를 만들지 않는다는 점은 일단 우리 눈에 코드 한 줄을 줄일 수 있다는 이점도 있고, 눈에는 드러나지 않지만 코드가 실행될 때 메모리의 부담을 줄여주기도 합니다.
그래서 특정한 시점이 아니라 단순히 순간순간 그 때 당시 시간 값이 필요한 경우에는 Date.now() 메소드를 활용하는 것이 코드의 가독성 뿐만아니라 성능적인 측면에서도 좀 더 유리합니다.

***

> ## Date 객체의 형변환

```
let myDate = new Date(2017, 4, 18);

console.log(typeof myDate); // object
console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate)); // 1495033200000
console.log(Boolean(myDate)); // true
```

이 코드를 천천히 살펴봅시다. 세번째 줄에서 Date 객체의 자료형을 확인해보니 'object', 즉 객체라는 것을 확인할 수 있는데요.
Date 객체를 boolean 타입으로 변환하면 true가 되고, string 타입으로 변환하면 날짜값이 그대로 문자열로 변환이 됩니다.

우리가 눈여겨 볼 부분은 number 타입으로 변환할 경우입니다. 
이 값은 아무 의미없는 단순한 숫자값이 아니라 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값 입니다.

```
let myDate = new Date(2017, 4, 18);

console.log(myDate.getTime() === Number(myDate)); // true
```

이것은 다시 말해 Date 객체끼리 바로 사칙 연산도 충분히 가능하다는 뜻이기도 한데요.

```
let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)
```

이렇게 하니깐 두 Date객체 사이의 시간차이를 어렵지 않게 확인할 수 있죠?

***

> ## 날짜를 표현하는 문자열

YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 있습니다.

```
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
```

하지만 이런 방식을 사용하다보면 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라 서로 다른 결과 값이 나올 수도 있기 때문에 적어도 IETF 호환 RFC 2822 타임스탬프와 ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는 것을 권장드립니다!

더 많은 내용을 알고싶다면 이 링크를 참고해보세요!