// Write your tests here!
const polybius = require("../src/polybius.js");
const expect = require("chai").expect;
describe("Polybius: ", () => {
  it("The function encodes the letters i and j to 42 ", () => {
    const testString = "i";
    let actual = polybius(testString);
    expect(actual).to.equal("42");

    const testString2 = "j";
    actual = polybius(testString2);
    expect(actual).to.equal("42");
  });
  it("The function decodes 42 to (i/j) ", () => {
    const testString = "42";
    let actual = polybius(testString, false);
    expect(actual).to.equal("i/j");
  });
  it("The function ignores capital letters.", () => {
    const testString = "This is a Test";
    const testString2 = "this is a test";
    let capital = polybius(testString);
    let lowercase = polybius(testString2);
    expect(capital).to.eql(lowercase);
  });
  it("Function maintains spaces in the message, before and after encoding or decoding.", () => {
    const testString = "abc";
    let encode = polybius(testString);
    let decode = polybius(encode, false);
    expect(decode).to.eql(testString);
  });
});