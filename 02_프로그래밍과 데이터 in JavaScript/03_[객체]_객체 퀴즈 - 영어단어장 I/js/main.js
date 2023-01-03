let myVoca = {
	function: (Name) => {return Name},
  variable: '변수',
  constant: '상수',
  local: '지역의',
  global: '전반적인',
};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function(Name='함수'));