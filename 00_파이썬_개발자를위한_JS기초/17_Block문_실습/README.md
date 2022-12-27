### 함수나 제어문 없이 블록문만 정의할 수도 있음

```
{
    let x = 3;
    console.log('블록 안');
    console.log(x);
}

console.log('블록 바깥');
console.log(x); // 블록문 바깥에서 x 변수 호출 불가능
```