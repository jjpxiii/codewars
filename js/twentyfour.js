function equalTo24(args) {
  var numbers = Array.from(arguments);
  for (let i = 0; i < 4; i++) {
    let element1 = numbers[i];
    let leftoverArray = [...numbers.slice(0, i), ...numbers.slice(i + 1, 4)];
    for (let j = 0; j < 3; j++) {
      let element2 = leftoverArray[j];
      let firstResult = calculateEverything(element1, element2);
      let leftoverArray2 = [
        ...leftoverArray.slice(0, j),
        ...leftoverArray.slice(j + 1, 3),
      ];

      // console.log(firstResult);
      for (let k = 0; k < 2; k++) {
        let element3 = leftoverArray2[k];
        let element4 = [
          ...leftoverArray2.slice(0, k),
          ...leftoverArray2.slice(k + 1, 2),
        ][0];
        let secondResult = [];
        for (let l = 0; l < 6; l++) {
          secondResult[l] = calculateEverything(firstResult[l], element3);
          // console.log("second");
          // console.log(secondResult[l]);
          let lastResult = [];
          for (let m = 0; m < 6; m++) {
            lastResult[m] = calculateEverything(secondResult[l][m], element4);
            if (lastResult[m].indexOf(24) > -1) {
              let op = ["+", "-", "*", "/", "+", "*"];
              // console.log("second");
              // console.log(secondResult[l][m]);
              // console.log("LAST");
              // console.log(lastResult[m]);
              // console.log(l);
              // console.log(m);
              // console.log(lastResult[m].indexOf(24));
              return addParentheses(
                m < 3 ? element1 : element2,
                m < 3 ? element2 : element1,
                element3,
                element4,
                op[l],
                op[m],
                op[lastResult[m].indexOf(24)]
              );
            }
          }
        }
      }

      // console.log("2E BOUCLE !");

      for (let k = 0; k < 2; k++) {
        let element3 = leftoverArray2[k];
        let element4 = [
          ...leftoverArray2.slice(0, k),
          ...leftoverArray2.slice(k + 1, 2),
        ][0];
        let intermediary = [];
        intermediary = calculateEverything(element3, element4);
        // console.log("intermediary");
        // console.log(intermediary);
        for (let l = 0; l < 6; l++) {
          let lastResult = [];
          for (let m = 0; m < 6; m++) {
            lastResult[m] = calculateEverything(
              intermediary[l],
              firstResult[m]
            );
            // console.log("lastResult");
            // console.log(lastResult[m]);
            if (lastResult[m].indexOf(24) > -1) {
              // console.log("ICI !");
              // console.log("second");
              // console.log(secondResult[l][m]);
              console.log("LAST");
              console.log(lastResult[m]);
              console.log(m);
              console.log(lastResult[m].indexOf(24));
              console.log(l);
              let op = ["+", "-", "*", "/", "-", "/"];
              let n = lastResult[m].indexOf(24);
              return addParentheses(
                m > 3 ? element1 : element2,
                m > 3 ? element2 : element1,
                element3,
                element4,
                op[m],
                op[n],
                op[l]
              );
            }
          }
        }
      }
    }
  }
  return "It's not possible!";
}

function addParentheses(e1, e2, e3, e4, op1, op2, op3) {
  let p1 = "",
    p2 = "",
    p3 = "",
    p4 = "",
    p5 = "",
    p6 = "";
  if (
    (op1 === "*" || op1 === "/") &&
    (op2 === "+" || op2 === "-") &&
    (op3 === "+" || op3 === "-")
  ) {
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
  return `${p1}${e1}${op1}${p3}${e2}${p5}${op2}${p6}${e3}${p2}${op3}${e4}${p4}`;
}
function calculateEverything(a, b) {
  return [a + b, a - b, a * b, a / b, b - a, b / a];
}

// console.log(equalTo24(1, 2, 3, 4));
// console.log(equalTo24(2, 3, 4, 5));
// console.log(equalTo24(3, 4, 5, 6));
// console.log(equalTo24(1, 1, 13, 1));
// console.log(equalTo24(2, 7, 7, 13));
console.log(equalTo24(13, 13, 6, 12));
// console.log(equalTo24(13, 13, 13, 13));
module.exports = equalTo24;
