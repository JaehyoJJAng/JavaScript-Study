## 변수의 Scope
-   변수의 사용 가능한 범위
-   로컬(Local) 변수와 글로벌(Global) 변수

### Python
> 함수의 안팎이 로컬 , 글로벌의 기준
```
def my_function():
    # local variable
    x = 3 
    print('함수 안')
    print(x)
-> x는 함수 내에서만 사용가능한 변수
```

```
x = 3 # Global Variable
def my_function():
    # local variable
    print('함수 안')
    print(x)
```

### Java Script
> 블록(Block)의 안팎이 로컬 , 글로벌의 기준

```
let y = 3;
while (조건 부분) { 블록문 
    let x = 2; // 블록문 내에서만 사용 가능한 변수
    // ...
}
```

```
function myFunction() { 
    let x = 3; // Local Variable 
    console.log('함수안');
    console.log(x);
}
```

```
let x = 3; // Global Variable;
function myFunction() { 
    let x = 3; // Local Variable 
    console.log('함수안');
    console.log(x);
}
```

<strong>함수나 제어문 없이 블록문만 정의할 수도 있음</strong>

```
{
    let x = 3;
    console.log('블록 안');
    console.log(x);
}

console.log('블록 바깥');
console.log(x); // 블록문 바깥에서 x 변수 호출 불가능
```