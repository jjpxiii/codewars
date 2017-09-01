function isInteresting(number, awesomePhrases) {
    var result = 0
    if (number < 100) return 0
    for (let i = -2; i < 3; i++) {
        var isChecked = false
        const nc = (number + i).toString().split("");
        check: if (number + i > 99) {
            isChecked = checkZeros(nc)
            if (isChecked) break check
            isChecked = checkSameDigits(nc)
            if (isChecked) break check
            isChecked = checkIncremental(nc)
            if (isChecked) break check
            isChecked = checkIncremental(nc.reverse())
            if (isChecked) break check
            isChecked = checkPalindrome(nc.reverse())
            if (isChecked) break check
            isChecked = awesomePhrases.indexOf(number + i) >= 0
            if (isChecked) break check
        }
        if (isChecked)
            result = i === 0 ? 2 : 1
        if (result == 2) break
    }
    return result
}

function checkZeros(input) {
    return input.slice(1).every(function (a) { return a === "0" })
}

function checkSameDigits(input) {
    var first = input[0]
    return input.every(function (a) { return a === first })
}

function checkIncremental(input) {
    var isInc = false
    for (let i = 1; i < input.length; i++) {
        if (input[i] === "0" && i !== input.length - 1)
            return false
        else if (Number(input[i]) == Number(input[i - 1]) + 1)
            isInc = true
        else if (input[i] === "0" && input[i - 1] !== "9") return false
            else return false
    }
    return isInc
}

function checkPalindrome(input) {
    return String(input.slice(0, input.length / 2)) === String(input.slice((input.length / 2) + input.length % 2).reverse())
}

// console.log(isInteresting(109, []))
// console.log(isInteresting(9779, [1337, 256]))
// console.log(isInteresting(989, [1337, 256]))
console.log(isInteresting(890, [1337, 256]))
console.log(isInteresting(1000, [1337, 256]))
console.log(isInteresting(789, [1337, 256]))
console.log(isInteresting(1337, [1337, 256]))
console.log(isInteresting(11209, [1337, 256]))