// 함수선언
// 매개변수에 초기값 설정은 파이썬과 동일하게 가능함
function ticketPrice(standard=3,student=3) {
  let standardPrice = 15000;
  let studentPrice  = 8000;

  totalPrice = (standard * standardPrice) + (student * studentPrice);
  return totalPrice;
}
ticketPrice() // 69000
ticketPrice(standard=5,student=5); // 115000 