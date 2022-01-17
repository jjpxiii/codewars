function runoff(ballots) {
  //   console.log(JSON.stringify(ballots));
  var candidates = ballots[0];
  //   console.log(candidates);
  while (true) {
    let votes = new Object();
    for (let i = 0; i < ballots.length; i++) {
      if (ballots[i][0] in votes) {
        votes[ballots[i][0]] += 1;
      } else {
        votes[ballots[i][0]] = 1;
      }
    }
    candidates = candidates.filter((e) => Object.keys(votes).includes(e));
    // console.log(JSON.stringify(votes));
    // console.log(candidates);
    let max = Object.entries(votes).reduce((a, b) => (a[1] > b[1] ? a : b));
    if (max[1] >= ballots.Length / 2 + 1) {
      return max[0];
    }
    if ([...new Set(Object.values(votes))].length === 1) {
      if ([...new Set(Object.keys(votes))].length === candidates.length) {
        return undefined;
      }
      //   console.log("zerzertzer");
      return Object.keys(votes)[0];
    }
    let minNumberOfVotes = Object.entries(votes).reduce((a, b) => (a[1] < b[1] ? a : b))[1];
    let eliminated = Object.entries(votes)
      .filter((vote) => vote[1] === minNumberOfVotes)
      .map((o) => o[0]);
    candidates = candidates.filter((e) => !eliminated.includes(e));
    if (candidates.length === 1) {
      return candidates[0];
    }
    // console.log(candidates);
    for (let j = 0; j < ballots.length; j++) {
      if (eliminated.includes(ballots[j][0])) {
        ballots[j].shift();
      }
    }
  }
}
// const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }
module.exports = runoff;
