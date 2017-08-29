function isMerge(s, part1, part2) {
    var canFindInPart2 = false
    p1 = part1.split('')
    p2 = part2.split('')
    if (p1.length + p2.length < s.length) return false
    toto: for (let i = 0; i < s.length; i++) {
        for (var j = 0; j < 1; j++) {
            if (p2[j] === p1[j]) {
                if (p2[j + 1] === s[i + 1]) {
                    p2.shift();
                    console.log(s[i])
                    continue toto;
                }
                else if (p1[j + 1] === s[i + 1]) {
                    p1.shift();
                    console.log(s[i])
                    continue toto
                }
            }
            if (p2[j] === s[i]) {
                p2.shift();
                console.log(s[i])
                continue toto;
            }

            if (p1[j] === s[i]) {
                p1.shift();
                console.log(s[i])
                continue toto
            }
        }
    }
    return (p1.length == 0 && p2.length == 0)
}

console.log(isMerge("IHveIG_/,!aI)D*oNJ&-", "IHveG/)oNJ", "I_,!aID*&-"))

console.log(isMerge('codewars', 'code', 'wasr'));
// console.log(isMerge('codewars', 'cdw', 'oears'));
// console.log(isMerge("Making progress", "Mak pross", "inggre"))
// console.log(isMerge("Bananas from Bahamas", "Bahas", "Bananas from am")) //true
// console.log(isMerge('codewars', 'cod', 'wars')); //false
// console.log(isMerge('codewars', 'code', 'code')); // false
// console.log(isMerge('codewars', 'codes', 'wars')); // false
// console.log(isMerge('codewars', 'cwdr', 'oeas')); // false
// console.log(isMerge("Can we merge it? No, we can't", "Cn weeg Ys ecn!", "a mre it?e,w a"))