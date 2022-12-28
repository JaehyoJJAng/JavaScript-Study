// 대괄호 표기법 사용
function addVoca(myVocab,propertyName,propertyValue) {
  // 프로퍼티 추가
  myVocab[propertyName] = propertyValue;
  return myVocab;
  
}

function updateVoca(myVocab,propertyName,propertyValue) {
  // 프로퍼티 업데이트
  myVocab[propertyName] = propertyValue
  return myVocab
  
}

function deleteVoca(myVocab,propertyName) {
  // 프로퍼티 삭제
  delete myVocab[propertyName];
  return myVocab
}
let voca = {
  function: '함수',
  variable: '변수',
  constant: '상수',
  defaultValue: '기본 값',
  global: '세계적인'
};


// '지역의'라는 뜻을 가진 local 프로퍼티를 추가해 주세요
// 여기에 코드를 작성하세요
// console.log(myVocab);
console.log(addVoca(myVocab=voca,propertyName='local',propertyValue='지역의'));

// // global 프로퍼티의 값을 '전체적인'으로 바꿔 주세요
// // 여기에 코드를 작성하세요
// console.log(myVocab);
console.log(updateVoca(myVocab=voca,propertyName='global',propertyValue='전체적인'));

// // default value 프로퍼티를 삭제해 주세요
// // 여기에 코드를 작성하세요
// console.log(myVocab);
console.log(deleteVoca(myVocab=voca,propertyName='defaultValue'));

// 점 표기법
{
  let voca = {
    function: '함수',
    variable: '변수',
    constant: '상수',
    'default value': '기본 값',
    global: '세계적인'
  };
  
  // '지역의'라는 뜻을 가진 local 프로퍼티를 추가해 주세요
  // 여기에 코드를 작성하세요
  voca.local = '지역의';
  console.log(voca);
  
  // global 프로퍼티의 값을 '전체적인'으로 바꿔 주세요
  // 여기에 코드를 작성하세요
  voca.global = '전체적인'
  console.log(voca);
  
  // default value 프로퍼티를 삭제해 주세요
  // 여기에 코드를 작성하세요
  delete voca['default value'];
  console.log(voca);
}
