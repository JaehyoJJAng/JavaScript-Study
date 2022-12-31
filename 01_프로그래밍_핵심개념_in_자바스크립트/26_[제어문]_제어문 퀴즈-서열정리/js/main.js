// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
const myGender = 'male';

// 호칭을 담은 변수
const callOlderBrother = '형';
const callOlderSister = '누나';
const callYoungerSister = '여동생';
const callYoungerBrother = '남동생';
var callFriend = '친구';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
var whatShouldICallYou = (yourAge,yourGender) => {
  if (myAge === yourAge) {
    return '친구';
  }
  else if (yourAge > myAge && yourGender !== myGender) {
    return '누나';
  }
  else if (yourAge > myAge && yourGender === myGender) {
    return '형';
  }
  else if (yourAge < myAge && yourGender === myGender) {
    return '남동생';
  }
  else if (yourAge < myAge && yourGender !== myGender) {
    return '여동생';
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);