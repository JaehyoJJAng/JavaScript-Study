
{
  /** for .. in
   * for (변수 in 객체) {동작부분}
   *  */ 

  var obj = {
    name: '코드잇',
    'born-Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
      title: "자바스크립트 기초",
      language: "JavaScript"
    },
  };

  // for .. in으로 순회하며 오브젝트 안의 각 Property Value 추출하기
  for (var key in obj) {
    if (key === 'worstCourse') {
      console.log(`KEY : ${key}\nValue : ${obj[key]}\n`);
    }
    else if (key === 'isVeryNice') {
      console.log(`KEY : ${key}\nValue : ${obj[key]}\n`);
    }
  }
}