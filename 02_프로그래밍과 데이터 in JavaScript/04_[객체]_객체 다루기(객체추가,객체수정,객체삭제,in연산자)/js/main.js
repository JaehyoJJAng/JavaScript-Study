{
  var codeit = {
    name: '코드잇',
    'born-Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
      title: "자바스크립트 기초",
      language: "JavaScript"
    },
  };
  
  // Property Value 수정하기
  // propertyName : name의 Value를 'codeit'으로 변경
  codeit.name = 'codeit' // 점표기법
  codeit['name'] = 'codeit' // 대괄호 표기법
  console.log(codeit);

  // 새로운 프로퍼티 추가하기
  codeit.ceo = '강영훈'; // 점표기법
  codeit['ceo'] = '강영훈';
  console.log(codeit);

  // 프로퍼티 삭제하기
  delete codeit.ceo; // 점표기법
  delete codeit['ceo'] // 대괄호 표기법

  // 객채에서 프로퍼티 존재 여부 파악하기 ( if 분기문 )
  if (codeit.name !== undefined) {console.log(codeit.name)} else {console.log("Undefined")}; 
  
  /**
   * 객채에서 프로퍼티 존재 여부 파악하기 ( in 연산자 )
   * 'PropertyName' in object
  */ 
  if ('name' in codeit) {console.log(codeit['name'])};
  
}