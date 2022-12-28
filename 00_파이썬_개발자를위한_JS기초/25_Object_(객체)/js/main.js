{
  let myFamily = {
    mother:  '김자옥',
    father:  '이석진',
    brother: '이동민',
    sister:  '이누나'
  };

  console.log(myFamily['mother']);
  console.log(myFamily['father']);
  console.log(myFamily['brother']);
  console.log(myFamily['sister']);
}

{
  let codeIt = {
    '@name': '코드잇',
    'born year': 2017,
    'worst-Topic': null,
    betsTopic: {
      title: '프로그래밍 시작하기 in 자바스크립트',
      language: 'JavaScript'
    },
    founders: ['강영훈','이윤수']
  };

  let name = codeIt['@name'];
  let bornYeaer = codeIt['born year'];
  let worstTopic = codeIt['worst-Topic'];
  let bestTopic = codeIt['bestTopic'];
  let founders = codeIt['founders'];

  for (
    let i = 0;
    i < founders.length;
    i++
  )
  {console.log(founders[i]);};
}