function encrypt(text, n) {
    console.log(text.length)
    for (let i = 0; i < n; i++) {
        var even = ""
        var odd = ""
        for (let j = 0; j < text.length; j++) {
            j % 2 == 0 ? odd += text[j] : even += text[j]
        }
        text = even + odd
    }
    return text
}

function decrypt(text, n) {
    console.log(text.length)
    for (let i = 0; i < n; i++) {
        var med = Math.floor(text.length / 2)
        var even = text.substring(0, med)
        // var odd = text.substring(text.length / 2)
        var temp = ""
        for (let j = med; j < text.length; j++) {
            even = even.substring(0, j - med + (j - med)) + text[j] + even.substring(j - med + (j - med), even.length);
        }
        text = even
    }
    return text
}

console.log(encrypt("This is a test!", 1));
console.log(decrypt("hsi  etTi sats!", 1))
console.log(decrypt(" Tah itse sits!", 3));
console.log(decrypt("s eT ashi tist!", 2))