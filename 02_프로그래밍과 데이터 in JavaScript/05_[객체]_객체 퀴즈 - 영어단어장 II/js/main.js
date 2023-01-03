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

var loadMyVocaWord = (myVoca,loadWord) => {
  if (loadWord in myVoca) {console.log(myVoca[loadWord]);}
}

// 1. 이미 외운 단어 3개를 삭제해 주세요
myVoca = deleteMyVocaWord(myVoca=myVoca,delWord='function');
myVoca = deleteMyVocaWord(myVoca=myVoca,delWord='constant');
myVoca = deleteMyVocaWord(myVoca=myVoca,delWord='local');
console.log(myVoca);
console.log(typeof myVoca.constant);

// 2. 오늘 외울 단어 4개를 추가해 주세요
myVoca = addMyVocaWord(myVoca=myVoca,addWord='extend',wordMean='확장하다');
myVoca = addMyVocaWord(myVoca=myVoca,addWord='export',wordMean='내보내다');
myVoca = addMyVocaWord(myVoca=myVoca,addWord='import',wordMean='불러오다');
myVoca = addMyVocaWord(myVoca=myVoca,addWord='default value',wordMean='기본값');

console.log(myVoca);
console.log(myVoca.export);

// 3. default value의 뜻을 출력해 주세요
loadMyVocaWord(myVoca=myVoca,loadWord='default value');