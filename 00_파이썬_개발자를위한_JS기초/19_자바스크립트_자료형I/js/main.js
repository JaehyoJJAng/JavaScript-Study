{
  let array = [
    'number','string','boolean',
    'null','undefined','array']

  function GetArray(array) {
    // 배열의 2번째 요소 출력
    console.log(array[1]);

    // 배열의 마지막 요소 출력
    console.log(array[array.length - 1]);

    // 기본 자료형에 속하는 처음 5개 요소를 잘라내서 출력
    console.log(array.slice(0,5 ));
  }

  GetArray(array=array);
}
