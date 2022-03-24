function equalTo24(args) {
  var numbers = Array.from(arguments);
  for (let i = 0; i < 1; i++) {
    let element1 = numbers[i];
    let leftoverArray = [...numbers.slice(0, i), ...numbers.slice(i + 1, 4)];
    for (let j = 0; j < 1; j++) {
      let element2 = leftoverArray[j];
      let firstStage = calculateEverything(element1, element2);
      let leftoverArray2 = [...leftoverArray.slice(0, j), ...leftoverArray.slice(j + 1, 3)];
      
      for (let k = 0; k < 1; k++) {
        let element3 = leftoverArray2[k];
        let secondStage = [];
        for (let l = 0; l < 4; l++) {
          secondStage[l] = calculateEverything(firstStage[l], element3);
          console.log(secondStage[l]);
          let element4 = [...leftoverArray2.slice(0, k), ...leftoverArray2.slice(k + 1, 2)][0];
          let lastStage = [];
          for (let m = 0; m < 4; m++) {
            lastStage[m] = calculateEverything(secondStage[l][m], element4);
            if (lastStage[m].indexOf(24) > -1) {
              let op = ["+", "-", "*", "/"];
              return addParentheses(element1, element2, element3, element4, op[l], op[m], op[lastStage[m].indexOf(24)]);
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
    p4 = "";
  if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-") && (op3 === "+" || op3 === "-")) {
    p3 = "(";
    p4 = ")";
  }
  if ((op3 === "*" || op3 === "/") && (op2 === "+" || op2 === "-") && (op1 === "+" || op1 === "-")) {
    p1 = "(";
    p2 = ")";
  }
  return `${p1}${e1}${op1}${p3}${e2}${op2}${e3}${p2}${op3}${e4}${p4}`;
}
function calculateEverything(a, b) {
  return [a + b, a - b, a * b, a / b];
}

console.log(equalTo24(1, 2, 3, 4));
// console.log(equalTo24(2, 3, 4, 5));
// console.log(equalTo24(3, 4, 5, 6));
// console.log(equalTo24(1, 1, 13, 1));
// console.log(equalTo24(13, 13, 13, 13));
module.exports = equalTo24;
