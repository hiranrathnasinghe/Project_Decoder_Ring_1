// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift=0, encode = true) {
  
    /*
    ASCII Range: 97 - 122
    */
    //==================================
    //Initalize output container.
    let output = "";
    //Convert input string to lower case. 
    input = input.toLowerCase();
    //Check for ENCODE or DECODE state.
    if (!encode) {
      //if DECODE negate the shift value.
      shift = shift * -1;
    }
    //Check whether shift value is present, equal to zero, less than -25 or greater 25. Return false if condition is met.
    if (shift === 0 || shift > 25 || shift < -25) return false;

    //Loop thru the input string.
    for (let i = 0; i < input.length; i++) {
      //Convert character to ASCII and pass it on the "getCharCode" variable.
      const getCharCode = input.charCodeAt(i);

      //If ASCII code is within 97 and 122.
      if (getCharCode < 123 && getCharCode > 96) {
        //Perform Shift and pass it into "newCharCode".
        let newCharCode = getCharCode + shift;

        //Perform Boundary Checks for wrap around...
        //If the shifted code is below 96 then loop around to 122 (z) and perform shift
        if (newCharCode < 97) newCharCode = 123 + (newCharCode - 97);
        //If the shifted code is above 122 then find remainder add to loop around the other end (a).
        else if (newCharCode > 122) newCharCode = (newCharCode % 122) + 96;
        //Convert ASCII code to string and accumulate to output
        output += String.fromCharCode(newCharCode);
        //Otherwise accumulate the characters in output
      } else { output += input[i]; }
    }
    return output;
  }

  return {
    caesar,
  };
})();
module.exports = caesarModule.caesar;
//module.exports = { caesar: caesarModule.caesar };
