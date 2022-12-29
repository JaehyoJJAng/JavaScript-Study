// 투표 결과 배열
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 여기에 코드를 작성하세요
{
	// 내가 푼 코드
	function checkVotes(votes) {
		// 후보별 득표수 객체
		let voteCounter = {};

		p1 = Array();
		p2 = Array();
		for (let vote of votes) {
			if (vote == '이재식') {
				p1.push(vote);
			}
			else {
				p2.push(vote);
			}
		}
		voteCounter['이재식'] = p1.length;
		voteCounter['이규하'] = p2.length;
		return voteCounter;
	}

	// 테스트 코드
	// console.log(voteCounter);
	console.log(checkVotes(votes=votes));
}

{
	// 정석 답
	function checkVotes(votes) {
		voteCounter = Object();

		for (let name of votes) {
			if (name in voteCounter) {
				voteCounter[name] += 1; 
			}
			else {
				voteCounter[name] = 1;
			}
		}
		
		return voteCounter;
	}

	console.log(checkVotes(votes=votes));
}