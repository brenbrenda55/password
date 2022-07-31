// Assignment code here
var lowercase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,,r,s,t,u,v,,w,x,y,z";
var uppercase ="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numbers ="0,1,2,3,4,5,6,7,8,9,";
var symbols ="!,@,#,$,%,^,&,*,_,-,+,=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    console.log("hello")

    var promptPassword = window.prompt('how many characters would you like your password to contain?');

    //validate prompt answer
    if (promptPassword === "" || promptPassword === null ) {
        window.prompt("youll need to provide a valid answer! please try again");
        //use return to call it again and stop the rest of this function from running
        return promptPassword();
    }


    var confirmOk = window.confirm("click OK to confirm including special characters");

    var confirmOk = window.confirm("click OK to confirm including numeric characters");

    var confirmOk = window.confirm("click ok to confirm including lowercase characters");

    var confirmOk = window.confirm("click ok to confirm including uppercase characters");






    //ask length numbers symbbols  upper,lower, 
    // 1- prompt the user for the password criteria
    //    a- password length 8 < 128
    //    b- lowercase, uppercase, numbers, special characters
    // 2- validate the input
    // 3- generate password bassed on criteria








    // 4- display password to the page
    return "generated password will go here"; 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

