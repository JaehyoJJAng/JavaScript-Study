// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요

function checkHeight(height) {
  if (height >= 140) {
    console.log('탑승이 가능합니다');
  } else {
    console.log('탑승이 불가능합니다.');
  }
}

checkHeight(height=141);
checkHeight(height=135);
checkHeight(height=170);