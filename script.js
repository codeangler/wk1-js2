var submission = prompt ("Pleaes enter any word");

var characterCount = submission.length;
var thirdCharacter = submission.charAt(2);
var nLowercase = submission.toLowerCase();
var nUppercase = submission.toUpperCase();
var nSubword = submission.substring(1,4);

alert("You entered: " + submission 
	+ "\nThere are " + characterCount	 + " characters in the word." +
	"\nThe third character is '" + thirdCharacter + "'" +
	"\nLowercase: " + nLowercase +
	"\nUppercase: " + nUppercase +
	"\nExample: " + "I have wanted a " + submission + " since I was a little girl." +
	"\nSubword: " + nSubword);
	
