// 코드 작성

function orderPrice(burger,hotdog,drink) { 
  let burgerPrice = 6000;
  let hotdogPrice = 5000;
  let drinkPrice  = 3000;

  totalPrice = (burger * burgerPrice) + (hotdog * hotdogPrice) + (drink * drinkPrice)
  return totalPrice
}
console.log(orderPrice(burger=1,hotdog=1,drink=2));
console.log(orderPrice(burger=0,hotdog=2,drink=2));