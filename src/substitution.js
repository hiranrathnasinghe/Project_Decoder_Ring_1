// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  //===== TRANSLATE FUNCTION FOR REAL ALPHABET AND THE KEY======
  function translate(input, alphabet, alphabetKey) {
    //Initalize result variable
    let result = "";
    //For loop to translate each character with alphabet key
    for (let character of input) {
      const key = alphabet.indexOf(character);
      if (key != -1) {
        result += alphabetKey[key];
      } else {
        result += character;
      }
    }
    //return result
    return result;
  }

  function substitution(input, alphabet, encode = true) {
    //Array for alphabet key
    const alphabetKey = [];
    //Array for regular alphabet
    const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];
    //Initialize output variable
    let output;
    //check whether the alphabet is empty or does not have 26 characters
    if (!alphabet || alphabet.length != 26) {
      //return false if condition is true
      return false;
    }
    //convert input string to lowercase
    input = input.toLowerCase();
    //For loop to check for symbols in the key alphabet
    for (let symbol of alphabet) {
      //Symbol check i
      if (alphabetKey.includes(symbol)) {
        return false;
      } else {
        //Push the character
        alphabetKey.push(symbol);
      }
      //if encode is true
      if (encode) {
        //Encode input using the alphabet key
        output = translate(input, alphabetArray, alphabetKey);
      } else {
        //Decode input using the alphabet key
        output = translate(input, alphabetKey, alphabetArray);
      }
    }
    //Return output
    return output;
  }

  return {
    substitution,
  };
})();
module.exports = substitutionModule.substitution;
//module.exports = { substitution: substitutionModule.substitution };
