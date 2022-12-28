{
  // Property Value에 함수 정의 해보기
  function welcome() {
    console.log('안녕하세요');
  }

  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
    greet: welcome,
  };

  // 메소드 호출해보기
  codeit.greet();
}

{
  // 매소드에 파라미터 추가해보기
  function welcome(name) {
    console.log(`안녕하세요 ${name} 님!`);
  }

  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
    greet: welcome,
  };

  // 메소드 호출해보기
  codeit.greet('이재효');
}

{
  // 오브젝트에 greet 프로퍼티 추가 및 프로퍼티 값에 함수를 바로 정의하기
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
  };

  codeit.greet = function welcome(name) {
    console.log(`안녕하세요 ${name} 님!`);
  };
  codeit.greet('이재효');
}