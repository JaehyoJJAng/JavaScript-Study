/*
if (조건 부분) {
  // ...
} else {
  // ...
}
*/


// if - else
let temperature = 100;
if (temperature >= 100) {
  console.log("물이 끓습니다");
}
  else {
  console.log("물이 끓지 않습니다")
  }

// else if (Python : elif)
let temperature2 = 1;
if (temperature2 >= 100) {
  console.log("물이 끓습니다");
}
  else if (temperature2 <= 0) {
  console.log("물이 업니다");
  }
  else {
  console.log("물이 얼지도 끓지도 않습니다")
  }