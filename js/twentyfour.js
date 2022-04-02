const { format } = require("prettier");

function calculateEverything(a, b) {
  return [a + b, a - b, a * b, a / b, b - a, b / a];
}

function remainder(already, left) {
  if (Number.isNaN(already + left)) {
    console.log("11111 " + already);
  }
  return [
    already + left,
    already - left,
    already * left,
    already / left,
    left - already,
    left / already,
  ];
}

function equalTo24(args) {
  var numbers = Array.from(arguments);

  for (let i = 0; i < 4; i++) {
    let element1 = numbers[i];
    console.log("First element " + element1);
    let leftoverArray = [...numbers.slice(0, i), ...numbers.slice(i + 1, 4)];
    let toGo = remainder(element1, 24);
    console.log(toGo);
    for (let j = 0; j < 3; j++) {
      let leftoverArray2 = [
        ...leftoverArray.slice(0, j),
        ...leftoverArray.slice(j + 1, 3),
      ];

      let element2 = leftoverArray[j];
      for (let a = 0; a < 6; a++) {
        // monomial

        // console.log("UN " + toGo[a]);
        // console.log("Second element " + element2);
        let toGoTwo = remainder(element2, toGo[a]);
        // console.log(toGoTwo);

        for (let k = 0; k < 1; k++) {
          let element3 = leftoverArray2[k];
          let element4 = leftoverArray2[k + 1];
          for (let b = 0; b < 6; b++) {
            let toGoThree = remainder(element3, toGoTwo[b]);
            if (toGoTwo[b] == 22) {
              // console.log("DEUX " + toGoTwo[b]);
              // console.log("Third element " + element3);
              // console.log(toGoThree);
            }
            let c = toGoThree.indexOf(element4);
            if (c > -1) {
              console.log(toGo);
              console.log(toGoTwo);
              console.log(toGoThree);
              // console.log(final);
              console.log("FUCK YEAH");
              console.log(element1);
              console.log(element2);
              console.log(element3);
              console.log(element4);
              console.log("UN " + toGo[a]);
              console.log("DEUX " + toGoTwo[b]);
              console.log("TROIS " + toGoThree[c]);
              console.log("OPS");
              let res1 = element1,
                res2 = element2,
                res3 = element3,
                res4 = element4;
              if (toGo[a] < 0) {
                // res1 = element1
                res1 = element2;
                res2 = element1;
              }
              if (toGoTwo[b] < 0) {
                // res1 = element1
                res3 = res2;
                res2 = element3;
              }
              if (toGoThree[c] < 0) {
                // res1 = element1
                res4 = res3;
                res3 = element4;
              }
              console.log(a);
              console.log(b);
              console.log(c);
              return formatResult(
                res4,
                res3,
                res2,
                res1,
                toGo[a] < 0 ? -a : a,
                toGoTwo[b] < 0 ? -b : b,
                toGoThree[c] < 0 ? -c : c
              );
              // }
            }
          }
        }
      }

      // other case with two binomes
    }
  }

  for (let i = 0; i < 4; i++) {
    let element1 = numbers[i];
    console.log("First element " + element1);
    let leftoverArray = [...numbers.slice(0, i), ...numbers.slice(i + 1, 4)];
    for (let j = 0; j < 3; j++) {
      let leftoverArray2 = [
        ...leftoverArray.slice(0, j),
        ...leftoverArray.slice(j + 1, 3),
      ];
      console.log("un " + numbers[i]);
      console.log("deux " + numbers[j]);
      console.log("trois " + leftoverArray2[0]);
      console.log("quatre " + leftoverArray2[1]);
      let binome1 = calculateEverything(numbers[i], numbers[j]);
      let binome2 = calculateEverything(leftoverArray2[0], leftoverArray2[1]);

      for (let a = 0; a < 6; a++) {
        // binomial
        for (let b = 0; b < 6; b++) {
          let binomialResult = calculateEverything(binome1[a], binome2[b]);
          if (binomialResult.indexOf(24) > -1) {
            console.log("ZOOOOOOOOOOOOOOOOOOOOOOOOB");
            console.log(binomialResult);
            console.log(binome1[a], binome2[b]);
            console.log(a);
            console.log(b);
            console.log(binomialResult.indexOf(24));
            let op = ["+", "-", "*", "/", "-", "/"];
            return addParentheses(
              false,
              a > 3 ? leftoverArray[j] : numbers[i],
              a > 3 ? numbers[i] : leftoverArray[j],
              b > 3 ? leftoverArray2[1] : leftoverArray2[0],
              b > 3 ? leftoverArray2[0] : leftoverArray2[1],
              op[a],
              op[binomialResult.indexOf(24)],
              op[b]
            );
          }
        }
      }

      // other case with two binomes
    }
  }
}

function addParentheses(nop = false, e1, e2, e3, e4, op1, op2, op3) {
  let p1 = "",
    p2 = "",
    p3 = "",
    p4 = "",
    p5 = "",
    p6 = "";
  if (!nop) {
    if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
      p3 = "(";
      p4 = ")";
    }
    if (
      (op3 === "*" || op3 === "/") &&
      (op2 === "+" || op2 === "-") &&
      (op1 === "+" || op1 === "-")
    ) {
      p1 = "(";
      p2 = ")";
    }
    if (
      (op3 === "-" || op3 === "+") &&
      (op2 === "*" || op2 === "/") &&
      (op1 === "-" || op1 === "+")
    ) {
      p1 = "(";
      p5 = ")";
      p6 = "(";
      p4 = ")";
    }
  }
  return `${p1}${e1}${op1}${p3}${e2}${p5}${op2}${p6}${e3}${p2}${op3}${e4}${p4}`;
}

function formatResult(e1, e2, e3, e4, n, n2, n3) {
  console.log(e1, e2, e3, e4, n, n2, n3);
  let op = ["-", "+", "/", "*", "+", "*"];
  let opNeg = ["+", "-", "*", "/", "-", "/"];
  if (n > 3)
    return addParentheses(
      false,
      e1,
      e2,
      e3,
      e4,
      n3 < 0 ? opNeg[-n3] : op[n3],
      n2 < 0 ? opNeg[-n2] : op[n2],
      n < 0 ? opNeg[-n] : op[n]
    );

  return `${e1}${n3 < 0 ? opNeg[-n3] : op[n3]}${e2}${
    n2 < 0 ? opNeg[-n2] : op[n2]
  }${e3}${n < 0 ? opNeg[-n] : op[n]}${e4}`;
}
// console.log(equalTo24(1, 2, 3, 4));
// console.log(equalTo24(2, 3, 4, 5));
// console.log(equalTo24(3, 4, 5, 6));
// console.log(equalTo24(1, 1, 1, 13));
console.log(equalTo24(2, 7, 7, 13));
// console.log(equalTo24(13, 13, 6, 12));
// console.log(equalTo24(13, 13, 13, 13));
module.exports = equalTo24;
