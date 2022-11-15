function validate() 
{
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var age = documen.getElementById("age").value;

    if(uname.trim() == "" || pass.trim() == "" || age.trim() == "") 
    {
        alert("Missing Credentials")
        return false;
    }
    else if (uname == "Femz" && pass == "12345" && age >= 13) 
    {
        alert("Login successfull")
        return true;
    } 
    else if (age < 13)
    {
        alert("underage")
        return false;
    }
    else {
        alert("Wrong ID and password")
        return false;
    }
}
