{ 
  // 방법 (1)
  let myVocab = {
    function: '함수',
    variable: '변수',
    constant: '상수',
    global: '전체적인',
    local: '지역의',
    printVocab: function printVocab(word) {
      if (myVocab[word]) {
        console.log(`'${word}'의 뜻은 '${myVocab[word]}'입니다.`);
      }
      else {
        console.log('단어를 찾지 못했습니다.');
      }
    }
  };
  
  // 테스트 코드
  myVocab.printVocab('function');
  myVocab.printVocab('local');
  myVocab.printVocab('array');
}

{
  // 방법 (2)
  let myVocab = {
    function: '함수',
    variable: '변수',
    constant: '상수',
    global: '전체적인',
    local: '지역의',
    printVocab: function printVocab(word) {
      if (word in myVocab) {
        console.log(`'${word}'의 뜻은 '${myVocab[word]}'입니다.`);
      }
      else {
        console.log('단어를 찾지 못했습니다');
      }
    }
  };
  
  // 테스트 코드
  myVocab.printVocab('function');
  myVocab.printVocab('local');
  myVocab.printVocab('array');
}