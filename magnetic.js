function doubles(maxk, maxn) {
    value = 0
    for (let i = 1; i <= maxk; i++) {
        for (let j = 1; j <= maxn; j++) {
            value += (1 / (i * Math.pow(j + 1, 2 * i)))
        }
    }
    return value
}

function assertFuzzyEquals(actual, expected, msg) {
    var inrange = Math.abs(actual - expected) <= 1e-6;
    Test.expect(inrange, msg || "At 1e-6: Expected value must be " + expected.toExponential(6) + ", but got " + actual.toExponential(6));
}

console.log(doubles(10,10000))
console.log(assertFuzzyEquals(doubles(1, 10), 0.5580321939764581))
console.log(assertFuzzyEquals(doubles(10, 1000), 0.6921486500921933))
console.log(assertFuzzyEquals(doubles(10, 10000), 0.6930471674194457))
console.log(assertFuzzyEquals(doubles(20, 10000), 0.6930471955575918))
