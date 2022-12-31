{
  // IF 사용
  var gradeObject =  {
    vipPrice : 15,
    rPrice : 13,
    sPrice : 10,
    aPrice : 8
  };
  
  // 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
  var IFcheckPrice = (grades) => {
    var arr = [];
  
    for (let key in gradeObject) {
      price = gradeObject[key];
  
      if (key === 'vipPrice') {
        console.log(`VIP석은 ${grades[key]}만원 입니다.`);
      }    
      else if (key === 'rPrice') {
        console.log(`R석은 ${grades[key]}만원 입니다.`)
      }
      else if (key === 'sPrice') {
        console.log(`S석은 ${grades[key]}만원 입니다.`)
      }
      else if (key === 'aPrice') {
        console.log(`A석은 ${grades[key]}만원 입니다.`)
      }
      else {
        console.log('VIP, R, S, A 중에서 하나를 선택해 주세요')
      }
    }
  }
  // IFcheckPrice(grades=gradeObject);
}

{
  // switch 사용

  // 각 등급별 가격
  let VIPPrice = 15;
  let RPrice = 13;
  let SPrice = 10;
  let APrice = 8;

  // 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
  function checkPrice(grade) {
    switch (grade) {
      case 'VIP':
        console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
        break;
      case 'R':
        console.log(`${grade}석은 ${RPrice}만원 입니다.`);
        break;
      case 'S':
        console.log(`${grade}석은 ${SPrice}만원 입니다.`);
        break;
      case 'A':
        console.log(`${grade}석은 ${APrice}만원 입니다.`);
        break;
      default:
        console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
    }
  }

  // 테스트 코드
  checkPrice('R');
  checkPrice('VIP');
  checkPrice('S');
  checkPrice('A');
  checkPrice('B');
}


