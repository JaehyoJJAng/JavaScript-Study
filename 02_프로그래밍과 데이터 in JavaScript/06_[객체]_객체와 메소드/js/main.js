/** 
 * 메소드 (method)
 * 오브젝트(객체)에 Property Valye가 함수로 선언된 경우 해당 프로퍼티를 메소드라고 지칭함
*/ 

{
  // greetings 객체의 Property Value에 Method 선언하기
  let greetings = {
    sayHello: () => {console.log("Hello!")},
    sayHi: () => {console.log("Hi!")},
    sayBye: () => {console.log("Bye!")},
    sayName: (Name) => {console.log(`${Name}`)},
  }
  
  console.log(greetings);

  // 객체의 메소드 호출하기 (점표기법))
  console.log(greetings.sayHello())
  console.log(greetings.sayName(Name='Lee Jae Hyo'));

  // 객체의 메소드 호출하기 (대괄호 표기법)
  console.log(greetings['sayHello']());
  console.log(greetings['sayName'](Name="Lee Jae Hyo"));
}

{
  // 사각형 너비 
  var rectAngle = {
    width: 30,
    height: 50,
    getArea: () => {return (rectAngle.width * rectAngle.height);}
  }

  // 삼각형 너비
  var triAngle = {
    width: 15,
    height: 40,
    getArea: () => {return (triAngle.width) * (triAngle.height / 2);}
  }
}