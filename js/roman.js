class RomanNumerals {
  static toRoman(n) {
    let res = "";
    if (n < 4000) {
      if (Math.floor(n / 1000 > 0)) {
        res += "M".repeat(n / 1000);
      }
      n %= 1000;
      if (Math.floor(n / 100) > 0) {
        // console.log(Math.floor(n / 100));
        if (Math.floor(n / 100) !== 9 && Math.floor(n / 100) >= 5) {
          res += "D";
          res += "C".repeat(Math.floor(n / 100 - 5));
        } else if (Math.floor(n / 100) === 4) {
          res += "CD";
        } else if (Math.floor(n / 100) === 9) {
          res += "CM";
        } else {
          res += "C".repeat(Math.floor(n / 10));
        }
      }
      n %= 100;
      if (Math.floor(n / 10) > 0) {
        console.log(Math.floor(n / 10));
        if (Math.floor(n / 10) !== 9 && Math.floor(n / 10) >= 5) {
          res += "L";
          res += "X".repeat(Math.floor(n / 10 - 5));
        } else if (Math.floor(n / 10) === 4) {
          res += "XL";
        } else if (Math.floor(n / 10) === 9) {
          res += "XC";
        } else {
          res += "X".repeat(Math.floor(n / 10));
        }
      }
      if (n % 10 > 0) {
        switch (n % 10) {
          case 9: {
            res += "IX";
            break;
          }
          case 8: {
            res += "VIII";
            break;
          }
          case 7: {
            res += "VII";
            break;
          }
          case 6: {
            res += "VI";
            break;
          }
          case 5: {
            res += "V";
            break;
          }
          case 4: {
            res += "IV";
            break;
          }
          default:
            res += "I".repeat(n % 10);
        }
      }
    }
    return res;
  }

  static fromRoman(n) {
    for (let i = 0; i < 4000; i++) {
      if (this.toRoman(i) === n) {
        return i;
      }
    }
  }
}

const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

class RomanNumerals {
  static fromRoman(str) {
    return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((pre, val) => pre + dec[rom.indexOf(val)], 0);
  }
  
  static toRoman(num) {
    return dec.reduce((pre, val, idx) => pre + rom[idx].repeat(num / val ^ 0, num -= val * (num / val ^ 0)), ``);
  }
}

// console.log(RomanNumerals.toRoman(1000));
// console.log(RomanNumerals.toRoman(1110));
console.log(RomanNumerals.toRoman(1898));
// console.log(RomanNumerals.toRoman(4));
