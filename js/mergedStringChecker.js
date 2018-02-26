function isMerge(s, part1, part2) {
    p1 = part1.split('')
    p2 = part2.split('')
    if (p1.length + p2.length != s.length) return false
     for (let i = 0; i < s.length; i++) {
        if (p2[0] === p1[0]) {
            if (p2[1] === s[i + 1]) {
                p2.shift();
                continue;
            }
            else if (p1[1] === s[i + 1]) {
                p1.shift();
                continue
            }
        }
        if (p2[0] === p1[0] && p2[1] === s[i + 1] || p2[0] === s[i]) {
            p2.shift();
            continue
        }

        if (p2[0] === p1[0] && p1[1] === s[i + 1] || p1[0] === s[i]) {
            p1.shift();
        }
    }
    return (p1.length == 0 && p2.length == 0)
}

function isMerge(s, part1, part2) {
    return !s ? !(part1 || part2) :
      s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
      s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
  }

// console.log(isMerge("IHveIG_/,!aI)D*oNJ&-", "IHveG/)oNJ", "I_,!aID*&-"))

// console.log(isMerge('codewars', 'code', 'wasr'));
// console.log(isMerge('codewars', 'cdw', 'oears'));
// console.log(isMerge("Making progress", "Mak pross", "inggre"))
console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am")) //true
// console.log(isMerge('codewars', 'cod', 'wars')); //false
// console.log(isMerge('codewars', 'code', 'code')); // false
// console.log(isMerge('codewars', 'codes', 'wars')); // false
// console.log(isMerge('codewars', 'cwdr', 'oeas')); // false
// console.log(isMerge("Can we merge it? No, we can't", "Cn weeg Ys ecn!", "a mre it?e,w a"))