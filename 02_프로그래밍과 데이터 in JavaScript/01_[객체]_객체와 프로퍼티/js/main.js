/**
 * 객체(Object) - Property(Key:value)
 * Object : {}
 */


/** PropertyName 주의 사항
 * 첫 번째 글자는 반드시 문자 , 밑줄(_) , 달러 기호($) 중 하나로 시작
 * 띄어쓰기 금지 (띄어쓰기 사용 시 따옴표('')로 감싼 후 선언)
 * 하이픈(-) 금지 (하이픈 사용 시 따옴표('')로 감싼 후 선언)
 */
{
  // Object(객체) 선언하기
  var obj = {
    // brandName : ProperyName , '코드잇' : Property Value
    brandName: '코드잇',
    'born-Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 기초',
      language: 'JavaScript'
    },
  };
  
  // obj 변수의 타입 출력 해보기
  console.log(typeof obj);
}

