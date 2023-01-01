{
  var printRange = (Maximum) => {
    // forCount 초기 값 선언
    var forCount = 0;

    for (;forCount <= Maximum;) {
      if (forCount % 2 === 0) {
        console.log(forCount);
      }
      
      // forCount 증감식
      forCount++;
    }
  }

  printRange(Maximum=100);
}