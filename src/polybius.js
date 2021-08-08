// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  //==== CONVERT LETTER TO ROW AND COLUMN CODE FUNCTION====
  function getRowCol(letter) {
    //Initialize Row and Column variables.
    let row = 0;
    let column = 0;
    //Convert input letter to lowercase.
    letter = letter.toLowerCase();
    //Get the ASCII code for the letter and substract it by 96.
    let letterNum = letter.charCodeAt(0) - 96;
    //if the difference is greater than or equal to 10, then decrement letterNum by 1, since there's only 
    //10 cells in the table.
    if (letterNum >= 10) {
      letterNum = letterNum - 1;
    }
    //Check whether the letterNum has a remainder
    if (letterNum % 5 != 0) {
      //Get row for corresponding row dividing by 5 and incrementing by 1.
      row = Math.floor(letterNum / 5) + 1;
      //Get column for corresponding letter.
      column = letterNum % 5;
    } else {
      //If no remainder,get row for corresponding row dividing by 5
      row = Math.floor(letterNum / 5);
      //Set column to the last column.
      column = 5;
    }
    //return row and column as a string.
    return `${column}${row}`;
  }
  //======END OF FUNCTION=======

  //==========CONVERT COLUMN AND ROW TO LETTER========
  function getLetter(column, row) {
    //If column and row are 4 & 2 return i/j per table.
    if (column == 4 && row ==2) {
      return "i/j";
    }
    //Convert row and colum to cells
    let total = (parseInt(row) - 1) * 5 + parseInt(column);
    //if the total is greater than 10 then increment total by 1.
    if (total > 10) {
      total += 1;
    }
    //Add 96 to total to convert to ASCII
    total += 96;
    //Convert ASCII code to a letter.
    return String.fromCharCode(total);
  }
  //======END OF FUNCTION=======
  
  //==========FUNCTION TO CHECK WHETHER THE CHARACTER IS A LETTER========
  function chkLetter(str) {
    //Return true if length = 1 and the string is between a-z, case insensitive.
    return str.length === 1 && str.match(/[a-z]/i);
  }
  //======END OF FUNCTION=======

  //============MAIN FUNCTION==============
  function polybius(input, encode = true) {
    // Initialize output
    let output = "";
    // If encode is flag is true
    if (encode) {
      //For loop for checking letter and getting row and column
      for (let letter of input) {
        if (chkLetter(letter)) {
          output =output + getRowCol(letter);
        } else {
          //it's a symbol
          output =output+ letter;
        }
      }
    }
    //Encode flag is false.
    else {
      //Remove spaces from input string
      let noSpaces = input.replace(" ", "");
      while (noSpaces.includes(" ")) {
        noSpaces = noSpaces.replace(" ", "");
      }
      //Check whether code length is odd, if so return false.
      if (noSpaces.length % 2 != 0) {
        return false;
      }
      //For loop for pairing numbers
      for (let i = 0; i < input.length; i += 2) {
        //Check for spaces in the current index and the next index
        if (input[i] === " " || input[i + 1] === " ") {
          //If both spots are spaces
          if (input[i] === " " && input[i + 1] === " ") {
            //Add to the output
            output = output + input[i];
            output = output + input[i + 1];
          } else {
            //if one space
            if (input[i] === " ") {
              //move it to the output
              output = output +input[i];
              //decrement index counter.
              i =i-1;
            } else {
              //return false
              return false;
            }
          }
        } else {
          //convert row column values to a letter and move to output
          output = output + getLetter(input[i], input[i + 1]);
        }
      }
    }
    //return output
    return output;
  }

  return {
    polybius,
    getRowCol,
    getLetter,
    chkLetter
  };
})();
module.exports = polybiusModule.polybius;
//module.exports = { polybius: polybiusModule.polybius };
