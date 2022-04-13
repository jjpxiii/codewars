const ops = { mul: "*", div: "/", min: "-", add: "+" };

function evil(fn) {
  return new Function("return " + fn)();
}

function solve24(num, how, target) {
  if (num.length === 1 && num[0].toFixed(5) === target.toFixed(5)) {
    return how[0].replace(",", "").replace("'", "");
  } else {
    for (let i = 0; i < num.length; i++) {
      const n1 = num[i];
      for (let j = 0; j < num.length; j++) {
        const n2 = num[j];
        if (i !== j) {
          for (op in ops) {
            let new_num = num
              .filter((n, k) => {
                if (k !== i && k !== j) return n;
              })
              .concat(evil("(" + Number(n1) + ")" + ops[op] + "(" + Number(n2) + ")"));
            let new_how = how
              .filter((h, k) => {
                if (k !== i && k !== j) return h;
              })
              .concat("(" + how[i] + ops[op] + how[j] + ")");
            let res = solve24(new_num, new_how, target);
            if (res) return res;
          }
        }
      }
    }
  }
}

function equalTo24(args) {
  let nums = Array.from(arguments);
  let res = solve24(nums, nums, 24);
  return res ? res : "It's not possible!";
}

function randomIntFromInterval(min = 1, max = 100) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let time1 = performance.now();
for (let index = 0; index < 1000; index++) {
  equalTo24(randomIntFromInterval(), randomIntFromInterval(), randomIntFromInterval(), randomIntFromInterval());
}
let time2 = performance.now();
console.log(" PAF ! " + (time2 - time1)/1000);
