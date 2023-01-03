{
  // Date
  var myDate = new Date(); // 생성한 순간의 날짜 : 시간 삽입
  console.log(myDate); // 2023-01-03T09:11:47.187Z  
}

{
    // Date('문자열')
  var myDate = new Date('2022-12-31');
  console.log(myDate);
}

{
  // YYYY-MM-DDThh:mm:ss
  var myDate = new Date('2022-12-31T14:00:00');
  console.log(myDate);
}

{
  // new Date(year,month,date,hours,minutes,seconsd,ms)
  var myDate = new Date(2017,4);
  console.log(myDate);
}

{
  // getTime() 메소드 사용
  var myDate = new Date('2023-01-02:00:00:00');
  var today  = new Date();

  var timeDiff = myDate.getTime() - today.getTime();

  console.log(timeDiff + '밀리초');
  console.log(timeDiff + '초');
  console.log(timeDiff / 1000 / 60 + '분');
  console.log(timeDiff / 1000 / 60  / 60 + '시간');
}