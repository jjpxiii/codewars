function longMult(num1, num2) {
    return largeIntegerString(
        digitProducts(digits(num1), digits(num2))
    );
}

// digitProducts :: [Int] -> [Int] -> [Int]
function digitProducts(xs, ys) {
    return multTable(xs, ys)
        .map(function (zs, i) {
            return Array.apply(null, Array(i))
                .map(function () {
                    return 0;
                })
                .concat(zs);
        })
        .reduce(function (a, x) {
            if (a) {
                var lng = a.length;

                return x.map(function (y, i) {
                    return y + (i < lng ? a[i] : 0);
                })

            } else return x;
        })
}

// largeIntegerString :: [Int] -> String
function largeIntegerString(lstColumnValues) {
    var dctProduct = lstColumnValues
        .reduceRight(function (a, x) {
            var intSum = x + a.carried,
                intDigit = intSum % 10;

            return {
                digits: intDigit
                    .toString() + a.digits,
                carried: (intSum - intDigit) / 10
            };
        }, {
            digits: '',
            carried: 0
        });

    return (dctProduct.carried > 0 ? (
        dctProduct.carried.toString()
    ) : '') + dctProduct.digits;
}

// multTables :: [Int] -> [Int] -> [[Int]]
function multTable(xs, ys) {
    return ys.map(function (y) {
        return xs.map(function (x) {
            return x * y;
        })
    });
}

// digits :: (Integer | String) -> [Integer]
function digits(n) {
    return (typeof n === 'string' ? n : n.toString())
        .split('')
        .map(function (x) {
            return parseInt(x, 10);
        });
}

function factorial(n) {
    var result = "1"
    for (let i = 1; i <= n; i++) {
        result = longMult(result, i.toString())
    }
    return result
}

function longPow(n) {
    var result = "1"
    for (let i = 1; i <= n; i++) {
        result = longMult(result, 2)
    }
    return result
}

// decode = function (w) {
//     var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? -"
//     var res = ""
//     for (let i = 0; i < w.length; i++) {
//         var newAlpha = [];
//         for (let j = 0; j < alphabet.length; j++) {
//             newAlpha[((j + 1) * longPow(i+1) - 1) % alphabet.length] = j
//         }
//         console.log(alphabet.indexOf(w.charAt(i)))
//         res += alphabet.charAt(newAlpha[alphabet.indexOf(w.charAt(i))])
//     }
//     return res;
// }

decode = function (w) {
    //console.log(w)
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? -"
    var res = ""
    for (let i = 1; i <= w.length; i++) {
        var newAlpha = [];
        var newIndex = alphabet.indexOf(w.charAt(i - 1)) + 1
        for (let j = 1; j <= alphabet.length; j++) {
            if (newIndex === j * Math.pow(2, i) % 67) {
                res += alphabet.charAt(j - 1)
                break
            }
        }
    }
    return res;
}

//console.log(decode("pJrZkmYVxPA5oJGXUW?OR?E3MJglc5,39Cd41rh1HHsGhrERKOPWdq"))
//console.log(decode("bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdh"))

console.log(decode("zJF-CZXBFglEWVNXUR?CQWg0YUCVxhW6UCdQBu7fOaMW"))