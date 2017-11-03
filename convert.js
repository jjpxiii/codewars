var Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
    switch (source) {
        case Alphabet.BINARY:
            input = parseInt(input, 2);
            break;
        case Alphabet.OCTAL:
            input = parseInt(input, 8);
            break;
        case Alphabet.HEXA_DECIMAL:
            input = parseInt(input, 16);
            break;
        case Alphabet.DECIMAL:
            input = parseInt(input);
            break;
        case Alphabet.ALPHA_UPPER:
            input = input.toLowerCase()
            break;
    }
    switch (target) {
        case Alphabet.BINARY:
            return input.toString(2)
        case Alphabet.OCTAL:
            return input.toString(8)
        case Alphabet.HEXA_DECIMAL:
            return input.toString(16)
        default:
            return input.toString(10)
    }
}

console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL))

console.log(convert("ARTETZET", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_LOWER))