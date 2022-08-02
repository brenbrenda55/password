// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="0123456789";
var symbols ="!@#$%^&*_-+=";
var chars = '';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");



var guanteeCharacters = ""; 

function generatePassword() {
    console.log("hello")


    // Spread Operator
    var fullCharacters = [
        ...lowercase.split(""),
        ...uppercase.split(""),
        ...numbers.split(""),
        ...symbols.split(""),
    ]; 


    var randomCharacters = "" // random remaining charac // 

    var promptCriteria = window.confirm('password must contain 8-128 characters with uppercase & lowercase letters, numbers and symbols');

    var promptPassword = window.prompt('how many characters would you like your password to contain?'); 
    //validate prompt answer
    if (promptPassword >= 8 && promptPassword <= 128) {
        if(confirm("would you like your password to contain upper case letters?")){
            var randomSymbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
            
            guanteeCharacters += randomSymbol;
            console.log(chars)
        }

        if (confirm("would you like your password to contain lowercase letters?")){
            var randomLowerCase = lowercase.charAt(Math.floor(Math.random() * lowercase.length));;
            guanteeCharacters += randomLowerCase;
            console.log(chars)
        }

        

    }  else {
        return window.alert("enter valid number")
    }

    var length = fullCharacters.length
    var remainingCharacter = Number(promptPassword) - Number(guanteeCharacters.length) // 8 - 3 = 5
    for ( var i = 0; i < remainingCharacter; i++ ) {
        randomCharacters += fullCharacters.join("").charAt(Math.floor(Math.random() * length));
     }

    const password = guanteeCharacters + randomCharacters;


    // passwordEl.value = chars;


    return password 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

