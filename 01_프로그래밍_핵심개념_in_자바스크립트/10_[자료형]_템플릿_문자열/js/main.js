// 템플릿 문자열 (template Strings)
// template: 일정한 틀 , 형식

{
  var year = 2018;
  var month = 3;
  var day = 11;

  console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)
}

{
  var myNumber = 3;
  
  var getTwice = (x) => {
    return x * 2;
  }

  function getTwice2(x) {
    return x * 2;
  }
  
  console.log(`${myNumber}의 두 배는 ${getTwice(x=myNumber)}입니다.`)
}