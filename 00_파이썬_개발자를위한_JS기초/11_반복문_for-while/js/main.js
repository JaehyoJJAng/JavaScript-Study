
/*
[for]
==== ==== ==== ==== ==== ====
for (let i = 0; i < n; i++) {
  // 수행동작 ..
}
==== ==== ==== ==== ==== ====
let i = 0; : 변수 초기화 부분
1 < n : 조건식 부분
i++: 추가동작 부분 (반복문을 돌 때마다 i값이 1씩 커지도록)

*/

// 1 ~ 10
for (let i=1; i < 11; i++) {
  console.log(i);
}

// 10 ~ 1
for (let i=10; i >= 1; i--) {
  console.log(i)
}

/*
[while]
while (조건 부분) {
  // ...
}
*/
let j = 0
while (j <= 100) {
  console.log(`j : ${j}`)
  j ++
}

let k = 0;
loopCheck = true;
while (loopCheck) {
  if (k > 100) {
    break
  }
  console.log(`k :${k}` );
  k++
}