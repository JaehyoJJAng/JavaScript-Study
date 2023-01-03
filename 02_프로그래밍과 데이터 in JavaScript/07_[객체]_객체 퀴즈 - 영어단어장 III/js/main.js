{
  // 오브젝트 메소드로 정의하지 않고 함수로 각 기능을 구현 하였을 때
  let myVoca = {
    function: (Name) => {return Name},
    variable: '변수',
    constant: '상수',
    local: '지역의',
    global: '전반적인',
  };
  
  var deleteMyVocaWord = (myVoca,delWord) => {
    // 이미 외운 영어단어 삭제
    if (delWord in myVoca) {delete myVoca[delWord]};
    return myVoca;
  }
  
  var addMyVocaWord = (myVoca,addWord,wordMean) => {
    // 외울 영어단어 추가
    myVoca[addWord] = wordMean
    return myVoca
  }
  
  var printMyVocaWord = (myVoca,printWord) => {
    if (loadWord in myVoca) {console.log(myVoca[printWord]);}
  }
  
}

{
  // Object 선언
  var myVoca = Object()

  // 오브젝트 메소드로 각 기능을 구현하였을 때
  var myVocaMethod = {
    addVoca: (addWord,wordMean) => {myVoca[addWord] = wordMean;},
    deleteVoca: (delWord) => {if (delWord in myVoca) {delete myVoca[delWord]}},
    printVoca: (printWord) => {if (printWord in myVoca) {console.log(`${printWord}의 뜻은 ${myVoca[printWord]}입니다.`)}}
  }

  // addVoca메소드 테스트 코드
  myVocaMethod.addVoca(addWord='parameter', wordMean='매개 변수');
  myVocaMethod.addVoca(addWord='element', wordMean='요소');
  myVocaMethod.addVoca(addWord='property', wordMean='속성');
  console.log(myVoca);

  // deleteVoca메소드 테스트 코드
  myVocaMethod.deleteVoca(delWord='parameter');
  myVocaMethod.deleteVoca(delWord='element');
  console.log(myVoca);

  // printVoca메소드 테스트 코드
  myVocaMethod.printVoca(printWord='property');
}