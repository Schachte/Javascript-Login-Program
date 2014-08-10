/*Javascript Login System*/

/*
Description: Use loops and variables to build a basic login system that implements functions to ask teh user whether or not they want to login or make a new account
*/

var userNameTable = ["username", "test"]; //Array to store the database of created usernames in
var userPassTable = ["password", "passtest"]; //Array to store all of the passwords in

var continueCreation = true; //boolean to control whether or not the loop process should be continued


alert("Schachte Database Authentication - 2014");


while (continueCreation) 

{
	var loginChoice = prompt("Would you like to login or create a new user for the database?  (new/login/exit)");

	loginChoice = loginChoice.toUpperCase(); //convert to uppercase to avoid any failures of conditional statements

	if (loginChoice == "NEW") {

		var newUser = prompt("Enter Desired Username : ");

			userNameTable.push(newUser); //push the new user variable into the array of usernames


		var newPass = prompt("Enter Desired Password : ");

			userPassTable.push(newPass); //push the user password into the array of user passwords

		alert("Congrats, the username has been added into the database");
			//Obligatory congratulation statement to allow the user know the user has been created and added into the databse

	}

	else if (loginChoice == "LOGIN") {

		var userMatch = false; //if the username matched, boolean will evaluate to true to grant proper authentication

		var userCount = 0; //integer variable stored to track position of the username and password to verify a proper match

		var passMatch = false; //if the username matched, boolean will evaluate to true to grant proper authentication

		var passCount = 0; //integer variable stored to track position of the username and password to verify a proper match

		var enterUser = prompt("Enter username: ");
		var enterPass = prompt("Enter password: ");

		for (var each_item in userNameTable) {

			userCount = userCount++; //increment the user count to track position of the user match

			if (userNameTable[each_item] == enterUser) {

				userMatch = true; //User name has been found!

				break; //break the for loop from continuing
			}
		}

		for (var each_item in userPassTable) {

			passCount = passCount++; //increment the user count to track position of the user match

			if (userPassTable[each_item] == enterPass) {

				passMatch = true; //Password has been found!

				break; //break the for loop from continuing
			}
		}

		if (userMatch == true && passMatch == true && userCount == passCount) {

			alert("Database Match Has Been Found!" + "\nThank you for entering the program, " + userNameTable[userCount]);
		}

		else {

			alert("Sorry, no information on that user was found in the database.");
		}

	}

	else if (loginChoice == "EXIT") {

		alert("Thank you for using Ryan Schachte's Database Authenticator\nMade in Javascript 2014");
		continueCreation = false; //Exit the loop using a boolean change
	}

	else if (loginChoice == "VIEWTABLES") {


		alert("USERNAMES: " + userNameTable + "\nPasswords: " + userPassTable);
	}

	else {

		alert("Sorry that option is not applicable to this application.");
	}

}


/*
var createUser = function(userName, passWord) {


}

var loginUser = function(userName, passWord) {



}
*/



