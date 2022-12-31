{
  var square = (x) => {
    return x * x;
  }
  console.log(square(x=3))
}

{
  var square = (x) => {
    console.log('return 전');
    return x * x;
    console.log('return 후'); // Dead Code 
  }

  console.log('함수 호출 전');
  square(x=3);
  console.log('함수 호출 후');
}