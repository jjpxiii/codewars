function isInteresting(number, awesomePhrases) {
    if (number < 100) return 0
    for (let i = -2; i < 3; i++) {
        var result = 0;
        if (number + i > 99) {
            result = checkZeros(number + i)
            if (i === 0 && result === 2) break
            result = checkSameDigits(number + i)
            if (i === 0 && result === 2) break
            result = checkIncremental(number + i)
            if (i === 0 && result === 2) break
            result = checkDecremental(number + i)
            if (i === 0 && result === 2) break
            result = checkPalindrome(number + i)
            if (i === 0 && result === 2) break
            result = checkAwesome(number + i)
            if (i === 0 && result === 2) break
        }
    }
}

function checkZeros(number)
{
    
}

console.log(isInteresting(1337, [1337, 256]), 2)
console.log(isInteresting(11209, [1337, 256]), 1)