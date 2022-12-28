{
  // 대괄호 표기법을 사용해서 프로퍼티에 접근하기
  let codeit = {
    '@name': '코드잇',
    'born Year': 2017,
    founders: ['강영훈','이윤수'],
    'worst-Topic': null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };
  console.log(`${'='.repeat(4)} 대괄호 표기법을 사용한 프로퍼티 접근 ${'='.repeat(4)}`);

  console.log(codeit['@name']); // @name 프로퍼티 접근
  console.log(codeit['bestTopic']['title']) // bestTopic 프로퍼티의 title 프로퍼티 접근
}

{
  // 점 표기법을 사용하여 오브젝트의 각 프로퍼티 접근
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstTopic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };
  
  console.log(codeit.name) // name 프로퍼티
  console.log(codeit.founders) // founders 프로퍼티
  console.log(codeit.bestTopic.title) // title 프로퍼티
} 

{
  // 점 표기법 + 대괄호 표기법을 사용하여 프로퍼티에 접근하기
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstTopic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };
  
  console.log(codeit.bestTopic['title']) // title 프로퍼티
} 

{
  // 없는 프로퍼티에 접근하는 경우
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstTopic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };
  
  console.log(codeit.members); // undefined
  console.log(codeit['members']); // undefined
}

{
  // 오브젝트에 특정 프로퍼티가 존재하는지 확인
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstTopic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };
  
  propertyCheck = ('members' in codeit) // false
  propertyCheck2 = ('founders' in codeit) // true
  if (propertyCheck === true) {
    console.log('true');
  }
  else {
    console.log('false');
  }
}

{
  // 변수를 이용해서 프로퍼티에 접근
  let codeit = {
    name: '코드잇',
    bornYear: 2017,
    founders: ['강영훈','이윤수'],
    worstTopic: null,
    bestTopic: {
      title: '프로그래밍 시작하기 in JavaScript',
      language: 'JavaScript'
    },
  };
  
  propertyName = 'bestTopic';
  console.log(codeit[propertyName]);
}