const { it } = require("@jest/globals");
const equalTo24 = require("./twentyfour");

describe("Basic tests", () => {
  test(" bla bla", () => {
      expect(equalTo24(1,2,3,4)).toBe("(1+3)*(2+4)"); 
      expect(equalTo24(3,4,5,6)).toBe("(3-4+5)*6");
      expect(equalTo24(1,1,1,1)).toBe("It's not possible!");
      expect(equalTo24(13,13,13,13)).toBe("It's nocd jt possible!");
  });
});
