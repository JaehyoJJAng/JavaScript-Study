{
  // 숫자형 메소드

  // 소수점 포메팅
  let floating = 9.34325;
  console.log(floating.toFixed(3));
}

{
  // 문자열 메소드
  {
    // length - 문자열의 길이 추출
    let myString = 'codeit';
    console.log(myString.length);
  }

  {
    // charAt() , []
    let myString = 'codeit';
    console.log(myString.charAt(3)); // e 
    console.log(myString[3]); // e
  }
  {  
    // 펠린드롬 확인하기
    function isPalindrome(word) {
      // 단어 1/2 지점까지 반복
      for (let i = 0;i < word.length / 2; i++) {
        // i번째 문자와 끝에서 i번째 문자와 비교
        if (word[i] !== word[word.length - 1 - i]) {
          return false;
        }
      }
      return true;
    }
    console.log(isPalindrome(word='racecar'));
    console.log(isPalindrome(word='토마토')); 
  }

  {
    // slice()
    let myString = 'codeit';
    console.log(myString.slice(0,4)); // code (0과 4사이)
    console.log(myString.slice(4)); // it (4부터 끝까지)
    console.log(myString.slice()); // codeit (문자열 전체)
  }

  {
    // .toUpperCase()
    let myString = 'CoDeit';
    console.log(myString.toUpperCase()); // CODEIT
  }

  {
    // .toLowerCase()
    let myString = 'CODEIT';
    console.log(myString.toLowerCase()); // codeit
  }

  {
    // .repeat()
    let myString = '123';
    console.log(myString.repeat(5))
  }

  {
    // .trim()
    let myString = "   Hello Codeit  ";
    console.log(myString.trim());

    let myStr = "\t\t\nHello Codeit";
    console.log(myStr.trim());
  }
}
