let codethat = {
  name: '코드댓',
  bornYear: 2022,
  founder: {
    name: '김민준',
    age: 28
  },
	languages: ['C++', 'Java', 'JavaScript', 'Python'],
};

// name 프로퍼티 값을 출력해 주세요
console.log(codethat.name);

// founder의 name 프로퍼티 값을 출력해 주세요
console.log(codethat.founder.name);
console.log(codethat.founder['name']);

// languages 프로퍼티의 3번째 값을 출력해 주세요
console.log(codethat.languages[2]);

// propertyName 변수를 이용해서 bornYear 프로퍼티 값을 출력해 주세요
let propertyName = 'bornYear';
console.log(codethat[propertyName]);