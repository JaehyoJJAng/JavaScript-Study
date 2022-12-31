if문을 활용하면 switch문을 if문으로 대체할 수도 있습니다.

```
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
```

이제 이런 코드들은 어느 정도 이해할 수 있으시죠?
동작은 switch문으로 만든 원리와 똑같이 동작합니다. 이 상태로 코드를 실행해보면, 동일한 결과가 두 번 나타나는 걸 확인할 수 있는데요.

그런데 if문 쪽을 보시면 myChoice를 조건 값과 함께 비교하는 조건식을 매번 작성해야 하는 번거로움도 있고, 코드 길이만 봤을 땐 좀 더 간결한 것 같지만, 뭔가 switch문이 조금 더 눈에 잘 읽히는 것 같죠?

if문과 switch문 모두 특정한 조건에 따라 다르게 동작하는 코드를 만들 수 있지만, 어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 좀 더 효과적이고 특정한 값에 일치하는 조건을 만들 때는 switch문이 좀 더 효과적입니다.

그런데 switch문이 익숙하지 않으신 분은 이렇게 if else문으로도 대체가 가능하니깐 switch문의 구조가 너무 어려우신 분은 if else문을 활용하셔도 좋습니다.

한 가지 주의할 점은 조건식에서 등호를 반드시 3개를 입력해 주어야 한다는 점인데요. switch문은 암시적 형 변환을 허용하지 않기 때문입니다.

```
let myChoice = '2';

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
```

위 코드 처럼

변수 myChoice에 숫자 2가 아니라 문자열 '2'를 할당하고 실행해보면 default문과, else문이 실행되는 모습을 확인할 수 있는데요.


```
1에서 4사이의 숫자를 선택해 주세요.
1에서 4사이의 숫자를 선택해 주세요.
```

이 상태에서 else if문을 등호 두 개로 비교하면 어떻게 될까요?

```
let myChoice = '2';

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice == 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice == 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice == 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice == 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
```

if문의 경우에는 문자열 2가 들어가서 동등 비교가 이뤄지면, true라는 결과가 나오기 때문에, 위 코드를 실행해보면, switch문은 default문이 실행되고, if문에서는 첫번째 else if문이 실행되는걸 확인할 수 있습니다.

```
1에서 4사이의 숫자를 선택해 주세요.
고양이를 선택한 당신, ...
```

그렇기 때문에, switch문은 값들을 비교할 때 자료형을 엄격하게 구분한다는 것과 if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야한다는 것.
이 부분은 꼭 기억해 두시면 좋을 것 같습니다!