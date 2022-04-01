const { format } = require("prettier");

function equalTo24old(args) {
  var numbers = Array.from(arguments);
  for (let i = 0; i < 4; i++) {
    let element1 = numbers[i];
    let leftoverArray = [...numbers.slice(0, i), ...numbers.slice(i + 1, 4)];

    for (let j = 0; j < 3; j++) {
      let element2 = leftoverArray[j];
      let firstResult = calculateEverything(element1, element2);
      let leftoverArray2 = [...leftoverArray.slice(0, j), ...leftoverArray.slice(j + 1, 3)];

      console.log(element1);
      console.log(element2);
      console.log("f " + firstResult);
      for (let k = 0; k < 2; k++) {
        let element3 = leftoverArray2[k];
        let element4 = [...leftoverArray2.slice(0, k), ...leftoverArray2.slice(k + 1, 2)][0];
        let secondResult = [];
        for (let l = 0; l < 4; l++) {
          secondResult[l] = calculateEverything(firstResult[l], element3);
          // console.log("second");
          // console.log(secondResult[l]);
          let lastResult = [];
          for (let m = 0; m < 4; m++) {
            lastResult[m] = calculateEverything(secondResult[l][m], element4);
            if (lastResult[m].indexOf(24) > -1) {
              let op = ["+", "-", "*", "/"];
              // console.log("first");
              // console.log(firstResult);
              // console.log("seconde");
              // console.log(secondResult[l]);
              // console.log("LAST");
              // console.log(lastResult[m]);
              // console.log(l);
              // console.log(m);
              // console.log(lastResult[m].indexOf(24));
              return addParentheses(false, element1, element2, element3, element4, op[l], op[m], op[lastResult[m].indexOf(24)]);
            }
          }
        }
      }

      // console.log("2E BOUCLE !");

      for (let k = 0; k < 2; k++) {
        let element3 = leftoverArray2[k];
        let element4 = [...leftoverArray2.slice(0, k), ...leftoverArray2.slice(k + 1, 2)][0];
        let intermediary = [];
        intermediary = calculateEverything(element3, element4)
          .concat(element4 - element3)
          .concat(element4 / element3);
        // intermediary = intermediary.concat(
        //   calculateEverything(element4, element3)
        // );
        console.log("intermediary");
        console.log(intermediary);
        for (let l = 0; l < 4; l++) {
          let intermediary2 = calculateEverything(firstResult[l], element3)
            .concat(element3 - firstResult[l])
            .concat(element3 / firstResult[l]);
          // console.log("IIIIII");
          // console.log(intermediary2);
          let intermediary3 = calculateEverything(firstResult[l], element4)
            .concat(element4 - firstResult[l])
            .concat(element4 / firstResult[l]);
          // console.log("IIIIIOOOI");
          // console.log(intermediary3);
          for (let m = 0; m < 6; m++) {
            let lastResult = calculateEverything(intermediary[m], firstResult[l]);
            if (lastResult.indexOf(24) > -1) {
              // console.log("ICI !");
              console.log(element3);
              console.log("first");
              console.log(firstResult);
              console.log("inter");
              console.log(intermediary);
              console.log("LAST");
              console.log(lastResult);
              console.log(l);
              console.log(m);
              console.log(lastResult.indexOf(24));
              let op = ["+", "-", "*", "/", "-", "/"];
              let n = lastResult.indexOf(24);

              return addParentheses(n === 4 || n === 5 ? true : false, element1, element2, element4, element3, op[m], op[n], op[l]);
            }
            let anotherResult = calculateEverything(intermediary2[m], element4);
            // if (firstResult[l] == 1) {
            //   console.log("jojo" + intermediary2 + " zerzer " + element4);
            // }
            if (anotherResult.indexOf(24) > -1) {
              console.log("ZRGTERGGERGRGERGERGGE");
              // console.log("ICI !");
              console.log(element3);
              console.log("first");
              console.log(firstResult);
              console.log("inter");
              console.log(intermediary2);
              console.log("LAST");
              console.log(anotherResult);
              console.log(l);
              console.log(m);
              console.log(anotherResult.indexOf(24));
              let op = ["+", "-", "*", "/"];
              let n = anotherResult.indexOf(24);

              return addParentheses(n === 4 || n === 5 ? true : false, element2, element1, element3, element4, op[m], op[n], op[l]);
              return;
            }
            let anotherResult2 = calculateEverything(intermediary3[m], element3);
            if (anotherResult2.indexOf(24) > -1) {
              console.log("ZRGTERGE");
              // console.log("ICI !");
              console.log(element3);
              console.log("first");
              console.log(firstResult);
              console.log("inter");
              console.log(intermediary3);
              console.log("LAST");
              console.log(anotherResult2);
              console.log(l);
              console.log(m);
              console.log(anotherResult2.indexOf(24));
              let op = ["+", "-", "*", "/", "-", "/"];
              let n = anotherResult2.indexOf(24);

              return addParentheses(
                n === 4 || n === 5 ? true : false,
                element3,
                element4,
                element2,
                element1,
                op[n],
                firstResult[l] < 0 && m > 3 ? op[m - 4] : op[m],
                op[l]
              );
              return;
            }
          }
        }
      }
    }
  }
  return "It's not possible!";
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
    if ((op3 === "*" || op3 === "/") && (op2 === "+" || op2 === "-") && (op1 === "+" || op1 === "-")) {
      p1 = "(";
      p2 = ")";
    }
    if ((op3 === "-" || op3 === "+") && (op2 === "*" || op2 === "/") && (op1 === "-" || op1 === "+")) {
      p1 = "(";
      p5 = ")";
      p6 = "(";
      p4 = ")";
    }
  }
  return `${p1}${e1}${op1}${p3}${e2}${p5}${op2}${p6}${e3}${p2}${op3}${e4}${p4}`;
}
function calculateEverything(a, b) {
  return [a + b, a - b, a * b, a / b];
}

function remainder(already, left) {
  if (Number.isNaN(already + left)) {
    console.log("11111 " + already);
  }
  return [already + left, already - left, already * left, already / left, left - already, left / already];
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
      let element2 = leftoverArray[j];
      for (let a = 0; a < 6; a++) {
        // console.log("UN " + toGo[a]);
        // console.log("Second element " + element2);
        let toGoTwo = remainder(element2, toGo[a]);
        // console.log(toGoTwo);
        let leftoverArray2 = [...leftoverArray.slice(0, j), ...leftoverArray.slice(j + 1, 3)];
        for (let k = 0; k < 1; k++) {
          let element3 = leftoverArray2[k];
          let element4 = leftoverArray2[k + 1];
          for (let b = 0; b < 6; b++) {
            let toGoThree = remainder(element3, toGoTwo[b]);
            if (toGoTwo[b] == 22) {
              console.log("DEUX " + toGoTwo[b]);
              console.log("Third element " + element3);
              console.log(toGoThree);
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
              return formatResult(res1, res2, res3, res4, toGo[a] < 0 ? -a : a, toGoTwo[b] < 0 ? -b : b, toGoThree[c] < 0 ? -c : c);
              // }
            }
          }
        }
      }
      // let firstResult = calculateEverything(element1, element2);
      // let leftoverArray2 = [
      //   ...leftoverArray.slice(0, j),
      //   ...leftoverArray.slice(j + 1, 3),
      // ];

      // for (let k = 0; k < 2; k++) {
      //   let element3 = leftoverArray2[k];
      //   let element4 = [
      //     ...leftoverArray2.slice(0, k),
      //     ...leftoverArray2.slice(k + 1, 2),
      //   ][0];
      // }
    }
  }
}

function formatResult(e1, e2, e3, e4, n, n2, n3) {
  console.log(n);
  let op = ["-", "+", "/", "*", "+", "*"];
  let opNeg = ["+", "-", "*", "/", "-", "*"];
  return `${e4}${n3 < 0 ? opNeg[-n3] : op[n3]}${e3}${n2 < 0 ? opNeg[-n2] : op[n2]}${e2}${n < 0 ? opNeg[-n] : op[n]}${e1}`;
}
// console.log(equalTo24(1, 2, 3, 4));
// console.log(equalTo24(2, 3, 4, 5));
// console.log(equalTo24(3, 4, 5, 6));
console.log(equalTo24(1, 1, 1, 13));
// console.log(equalTo24(2, 7, 7, 13));
// console.log(equalTo24(13, 13, 6, 12));
// console.log(equalTo24(13, 13, 13, 13));
module.exports = equalTo24;
