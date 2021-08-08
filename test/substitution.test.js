// Write your tests here!
const substitution = require("../src/substitution.js");
const expect = require("chai").expect;
describe("Substitution: ", () => {
  it("Function outputs false if the given alphabet is not 26 characters.  ", () => {
    const less25 = "123456789";
    const greater25 = "abcdefghijklmnopqrstuvwxyz1";
    const message = "The quick brown fox jumps over the lazy dog";

    const actualLess25 = substitution(message, less25);
    expect(actualLess25).to.eql(false);

    const actualMore25 = substitution(message, greater25);
    expect(actualMore25).to.eql(false);
  });
  it("Function encodes a given phrase, based on an given alphabet.", () => {
    const message = "javascript";
                    //abcdefghijklmnopqrstuvwxyz
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const result = "pqcqlekohz";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(result);
  });
  it("Function returns false if there are any duplicate characters in the given alphabet. ", () => {
    const message = "javascript";
    const alphabet = "qwertyuiopasdfghjklzxcvbnmq";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(false);
  });
  it("It maintains spaces in the message, before and after encoding or decoding. ", () => {
    const message = "i like javascript";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const result = "o soat pqcqlekohz";
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(result);
  });
  it("Function ignores capital letters.", () => {
    const message = "I Like Javascript";
    const message1 = "i like javascript";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const result = substitution(message1, alphabet);
    const actual = substitution(message, alphabet);
    expect(actual).to.eql(result);
  });
});

