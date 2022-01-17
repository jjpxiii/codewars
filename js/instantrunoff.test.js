const { it } = require("@jest/globals");
const runoff = require("./instantrunoff");

describe("Basic tests", () => {
  test_cases = [
    [
      [
        ["d", "a", "e", "b", "c"],
        ["b", "e", "d", "c", "a"],
        ["e", "a", "c", "b", "d"],
        ["e", "d", "a", "b", "c"],
        ["d", "b", "a", "e", "c"],
      ],
      "e",
    ],
    [
      [
        ["e", "c", "d", "b", "a"],
        ["b", "e", "a", "c", "d"],
        ["c", "e", "d", "a", "b"],
        ["a", "d", "e", "b", "c"],
        ["e", "d", "c", "a", "b"],
      ],
      "e",
    ],
    [
      [
        ["d", "a", "c", "b", "e"],
        ["b", "d", "e", "c", "a"],
        ["b", "c", "d", "e", "a"],
        ["c", "d", "e", "a", "b"],
        ["c", "e", "b", "a", "d"],
      ],
      "c",
    ],
    [
      [
        ["d", "e", "a", "c", "b"],
        ["d", "b", "a", "c", "e"],
        ["e", "a", "d", "b", "c"],
        ["a", "d", "c", "b", "e"],
        ["d", "b", "a", "e", "c"],
      ],
      "d",
    ],
    [
      [
        ["b", "a", "e", "d", "c"],
        ["a", "d", "e", "c", "b"],
        ["c", "a", "d", "b", "e"],
        ["c", "a", "e", "b", "d"],
        ["d", "c", "e", "a", "b"],
      ],
      "c",
    ],
    [
      [
        ["b", "c", "e", "a", "d"],
        ["b", "c", "a", "d", "e"],
        ["a", "d", "c", "e", "b"],
        ["b", "e", "a", "d", "c"],
        ["b", "c", "a", "e", "d"],
      ],
      "b",
    ],
    [
      [
        ["b", "c", "d", "a", "e"],
        ["d", "c", "b", "a", "e"],
        ["b", "c", "e", "d", "a"],
        ["c", "e", "b", "d", "a"],
        ["e", "b", "c", "d", "a"],
      ],
      "b",
    ],
    [
      [
        ["c", "b", "a", "e", "d"],
        ["e", "a", "c", "d", "b"],
        ["c", "a", "b", "d", "e"],
        ["d", "c", "a", "e", "b"],
        ["a", "b", "c", "d", "e"],
      ],
      "c",
    ],
    [
      [
        ["d", "a", "c", "e", "b"],
        ["e", "d", "b", "c", "a"],
        ["e", "a", "b", "c", "d"],
        ["d", "e", "a", "b", "c"],
        ["d", "b", "c", "e", "a"],
      ],
      "d",
    ],
    [
      [
        ["a", "e", "d", "c", "b"],
        ["b", "e", "a", "c", "d"],
        ["a", "e", "c", "b", "d"],
        ["a", "b", "e", "d", "c"],
        ["e", "d", "b", "a", "c"],
      ],
      "a",
    ],
    [
      [
        ["c", "a", "b", "d", "e"],
        ["b", "e", "d", "c", "a"],
        ["b", "e", "c", "a", "d"],
        ["d", "b", "c", "a", "e"],
        ["c", "b", "d", "a", "e"],
      ],
      "b",
    ],
    [
      [
        ["a", "b", "d", "e", "c"],
        ["e", "b", "a", "d", "c"],
        ["c", "a", "b", "e", "d"],
        ["a", "d", "e", "c", "b"],
        ["b", "a", "d", "e", "c"],
      ],
      "a",
    ],
    [
      [
        ["d", "a", "c", "e", "b"],
        ["b", "e", "a", "d", "c"],
        ["c", "e", "b", "d", "a"],
        ["c", "a", "b", "e", "d"],
        ["e", "c", "b", "d", "a"],
      ],
      "c",
    ],
    [
      [
        ["b", "a", "d", "e", "c"],
        ["b", "a", "c", "d", "e"],
        ["d", "e", "c", "b", "a"],
        ["b", "c", "e", "d", "a"],
        ["d", "b", "e", "a", "c"],
      ],
      "b",
    ],
    [
      [
        ["e", "b", "a", "c", "d"],
        ["e", "c", "a", "b", "d"],
        ["e", "d", "a", "b", "c"],
        ["a", "c", "b", "e", "d"],
        ["c", "a", "d", "b", "e"],
      ],
      "e",
    ],
    [
      [
        ["a", "c", "d", "e", "b"],
        ["e", "b", "d", "c", "a"],
        ["d", "e", "c", "a", "b"],
        ["c", "e", "d", "b", "a"],
        ["b", "e", "a", "c", "d"],
      ],
      undefined,
    ],
    [
      [
        ["a", "c", "b", "d", "e"],
        ["d", "c", "a", "b", "e"],
        ["e", "b", "d", "a", "c"],
        ["e", "a", "b", "c", "d"],
        ["b", "c", "e", "a", "d"],
      ],
      "e",
    ],
    [
      [
        ["e", "c", "a", "b", "d"],
        ["e", "a", "b", "d", "c"],
        ["d", "b", "e", "c", "a"],
        ["a", "c", "e", "b", "d"],
        ["e", "d", "a", "c", "b"],
      ],
      "e",
    ],
    [
      [
        ["a", "d", "b", "e", "c"],
        ["e", "a", "c", "b", "d"],
        ["d", "a", "c", "b", "e"],
        ["a", "d", "c", "b", "e"],
        ["e", "c", "b", "a", "d"],
      ],
      "a",
    ],
    [
      [
        ["a", "c", "b", "e", "d"],
        ["c", "a", "e", "b", "d"],
        ["e", "c", "b", "d", "a"],
        ["a", "e", "c", "d", "b"],
        ["d", "c", "e", "a", "b"],
      ],
      "a",
    ],
  ];
  test(" bla bla", () => {
    for (var i = 0; i < test_cases.length; i++) {
      expect(runoff(test_cases[i][0])).toBe(test_cases[i][1]);
    }
  });
});
