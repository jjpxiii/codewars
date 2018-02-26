// console.log (device.encode ('zzzzz')) ;
decode = function (w) {
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? -"
    var res = ""
    for (let i = 0; i < w.length; i++) {
        var newAlpha = [];
        newAlpha[68] = 0;
        for (let j = 0; j < alphabet.length; j++) {
            newAlpha[((j + 1) * longlib.longPow(2, i + 1) - 1) % alphabet.length] = j
        }
        console.log(alphabet.indexOf(w.charAt(i)))
        res += alphabet.charAt(newAlpha[alphabet.indexOf(w.charAt(i))])
    }
    return res;
}

// console.log(decode("pJrZkmYVxPA5oJGXUW?OR?E3MJglc5,39Cd41rh1HHsGhrERKOPWdq"))
console.log(decode("bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdh"))