function printGrade(midtermScore,finalScore) {
  let totalScore = (midtermScore + finalScore)
  if (totalScore >= 90) {
    let grade = 'A';
    console.log(grade)
    }

    else if (totalScore >= 80 && totalScore < 90) {
      let grade = 'B';
      console.log(grade)
    }

    else if (totalScore >= 70 && totalScore < 80) {
      let grade = 'C';
      console.log(grade)
    }

    else if (totalScore >= 60 && totalScore < 70) {
      let grade = 'D';
      console.log(grade)
    }
    else {
      let grade = 'F';
      console.log(grade)
    }
}

printGrade(midtermScore=25,finalScore=35);
printGrade(midtermScore=50,finalScore=45);
printGrade(midtermScore=29,finalScore=24);
printGrade(midtermScore=37,finalScore=42);