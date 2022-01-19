const runoff = require("./instantrunoff");

runoff([
  [
    ["e", "c", "a", "b", "d"],
    ["e", "a", "b", "d", "c"],
    ["d", "b", "e", "c", "a"],
    ["a", "c", "e", "b", "d"],
    ["e", "d", "a", "c", "b"],
  ],
  "e",
]);
