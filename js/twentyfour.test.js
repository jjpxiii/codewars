const { it } = require("@jest/globals");
const equalTo24 = require("./twentyfour");

describe("Basic tests", () => {
  test("Can add up to 24 ?", () => {
    expect(equalTo24(1, 2, 3, 4)).toBe("(1+2+3)*4");
    expect(equalTo24(2, 3, 4, 5)).toBe("(3-2+5)*4");
    expect(equalTo24(3, 4, 5, 6)).toBe("(3-4+5)*6");
    expect(equalTo24(1, 1, 13, 1)).toBe("(1+1)*(13-1)");
    expect(equalTo24(2, 7, 7, 13)).toBe("7/7+13*2");
    expect(equalTo24(13, 13, 13, 13)).toBe("It's not possible!");
  });
});
