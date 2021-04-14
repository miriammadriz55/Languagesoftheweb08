/*Create a webpage that allows the user to enter a password two times in order to validate it.
Web page content:
• Two password fields
o first to enter the password and a second to verify it
• A button labelled "Validate" that alerts one of the following messages:
o Display informative error message if any of the following occur:
▪ the passwords entered don't match
▪ the passwords are not at least 8 characters long
*/
function Password_Validator()
{
  //gets values
  let firsttry = document.getElementById("firsttry").value;
  let secondtry = document.getElementById("secondtry").value;

    //check condition
    //the passwords are not at least 8 characters long
    if (firsttry.length < 8) {
        alert("The passwords are not at least 8 characters long.")
    }

    //the passwords entered don't match
    else if (firsttry === secondtry)
    {
        alert("The passwords are a minimum of 8 characters and match! Password has been validated.")
    }
    else
    {
        alert("The passwords entered don't match.")
    }

}
