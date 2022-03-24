const { it } = require("@jest/globals");
const equalTo24 = require("./twentyfour");

describe("Basic tests", () => {
  test("Can add up to 24 ?", () => {
    expect(equalTo24(1, 2, 3, 4)).toBe("(1+2+3)*4");
    expect(equalTo24(3, 4, 5, 6)).toBe("(3-4+5)*6");
    expect(equalTo24(1, 1, 13, 1)).toNotBe("It's not possible!");
    expect(equalTo24(13, 13, 13, 13)).toBe("It's nocd jt possible!");
  });
});
