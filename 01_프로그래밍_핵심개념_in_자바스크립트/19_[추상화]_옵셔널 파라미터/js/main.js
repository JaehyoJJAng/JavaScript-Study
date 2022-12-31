{
  var sayHello = (Name)=> {
    console.log(`안녕하세요 ${Name}님!`);
  }
  console.log(sayHello(Name='jaehyo'));
  console.log(sayHello(Name='jaehyo1'));
  console.log(sayHello());  // 안녕하세요 undefined님!
}

{
    // 파라미터에 기본 값 설정 => 옵셔널 파라미터 (Optional Parameter)
    var sayHello = (Name='jaehyo') => {
      console.log(`안녕하세요 ${Name}님`);
    }
    sayHello();
    sayHello(Name='jaehyo 짱');
}

{
  // 옵셔널 파라미터
  var Dol = (a,b=10) => {
    console.log(a,b)
  }
  Dol(a=5);
}