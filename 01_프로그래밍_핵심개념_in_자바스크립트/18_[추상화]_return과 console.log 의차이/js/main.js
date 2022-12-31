{
  var printSquare = (x) => {
    console.log(x * x);
  }

  var getSquare = (x) => {
    return x * x;
  }
  console.log(getSquare(x=3));  // 9
  console.log()
  console.log(typeof printSquare(x=3));  // undefined 값
}