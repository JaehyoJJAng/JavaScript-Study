{
  // Object
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

  // 점 표기법 (objectName.propertyName)
  console.log(codeit.name);
  
  // 대괄호 표기법 (objectName['propertyName'])
  console.log(codeit['born-Year']);

  // 변수로 프로퍼티 뽑아오기
  var bornYear = 'born-Year';
  console.log(codeit[bornYear]);

  // 객체 안에 객체 불러오기 (점 표기법))
  console.log(codeit.bestCourse.title)
  console.log(codeit.bestCourse.language)

  // 객체 안에 객체 불러오기 (대괄호 표기법))
  console.log(codeit['bestCourse']['title']);
  console.log(codeit.bestCourse['language']);

  // 존재하지 않는 프로퍼티에 접근하는 경우
  console.log(typeof codeit.bestCourse['teacher']); // undefined
}