function validate() {
    var email = document.getElementById("mail").value;
    var regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
    if (email.trim() == "") 
    {
        alert("invalid email ID");
    }
    else if ((regex.test(email))) 
    {
        alert("email submitted successfully");
    } 
    else 
    {
        alert("wrong email ID")
    }
}