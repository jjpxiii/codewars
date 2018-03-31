function parseMolecule(formula) {
    var res = {}
    var stack = []
    // var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // var alphaDown = "abcdefghijklmnopqrstuvwxyz"
    var f = formula.replace('[', '(').replace(']', ')').split(/([A-Z][a-z]?|[0-9]{1,}|[\(\[\)\]])/g).filter((val) => val);
    var i = 0;
    while (true) {
        if (!isNaN(parseInt(f[i], 10))) {
            var prev = stack.pop()
            if (!res[prev])
                res[prev] = 0
            res[prev] = Number(res[prev] + f[i])
        }
        else if (f[i] == '(') {
            var tempFormula = ""
            var j = i
            while (f[j] != ')') {
                tempFormula += f[j]
                j++
            }
            var resTemp = parseMolecule(tempFormula)

            j = i
            var coeff = f[j + 1]
            // var temp = parseMolecule()

        }
        else {
            var prev = stack.pop()
            if (prev) {
                if (!res[prev])
                    res[prev] = 0
                res[prev] = Number(res[prev] + 1)
            }
            stack.push(f[i])
        }
        i++;
    }
    if (stack.length > 0) {
        var prev = stack.pop()
        if (!res[prev])
            res[prev] = 0
        res[prev] = Number(res[prev] + 1)
    }
    return res
    // return JSON.stringify(res)
}


function parseMoleculeJobards(formula) {
    var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
    while (tokens = tokenExp.exec(formula)) {
      tokens[2] = tokens[2] || 1;
      if (/^[A-Z]/.test(tokens[1])) {
        while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
      } else if (/[{\(\[]/.test(tokens[1])) {
        stack.push([]);
      } else {
        group = stack.pop();
        while (tokens[2]--) stack.push(stack.pop().concat(group))
      }
    }
    return stack[0].reduce(function (count, x) {
      count[x] = (count[x] || 0) + 1;
      return count;
    }, {});
  }

// console.log(parseMolecule("H2O"))
// console.log(parseMolecule("Mg(OH)2"))
console.log(parseMoleculeJobards("Mg(OH)2"))