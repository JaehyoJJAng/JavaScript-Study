{
  // color property 추가하기
  const codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
  };
  
  codeit['color'] = 'purple';
  codeit.color = 'purple';  
}

{
  // bornYear Property 값 수정하기
  const codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
  };
  
  codeit['color'] = 'purple';
  codeit.color = 'purple'; 

  codeit['bornYear'] = 2019;
  codeit.bornYear = 2019;  
}

{
  // founders Property 삭제하기
  const codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstCourse: null,
    bestCourse: {
      title: '자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    },
  };
  
  delete codeit.founders;
  delete codeit['founders'];
  console.log(codeit);
}