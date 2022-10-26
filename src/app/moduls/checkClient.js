function getInput() {
    try {
        var input = {
            fname: (document.getElementById("fname").value?document.getElementById("fname").value:document.getElementById("fname").placeholder),
            sname: (document.getElementById("sname").value?document.getElementById("sname").value:document.getElementById("sname").placeholder),
            email: (document.getElementById("email").value?document.getElementById("email").value:document.getElementById("email").placeholder),
            phone: (document.getElementById("phone").value?document.getElementById("phone").value:document.getElementById("phone").placeholder),
            project: (document.getElementById("projectname").value?document.getElementById("projectname").value:document.getElementById("projectname").placeholder)
        };
        return input;
    } catch (error) {
        alert("Error " + error +"\n");
        return "";
    }
}

function validateInput(client) {
    if (client.fname != null && client.sname != null && client.email != null){
        return true;
    } else {
        return false;
    }
}

function checkNumbers(param) {
        if ((param.match(/\d+/g)) != null) {
            alert("numbers in name detected");
            return false;
        } else{
            return true;
        }
}

function checkEmail(emailToCheck) {
    let validRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailToCheck.match(validRegEx) != null) {
        return true;
    } else{
        alert("email invalid");
        return false;
    }
}

function emailExists(email) {
    if ((window.localStorage.getItem(email)?true:false)){
        alert("Email: " + email + " exists");
        return false;
    } else{
        return true;
    }
}

function check() {
    var client = getInput();
    if(validateInput(client)){ // checking if requierd inputs are not empty
        if(checkEmail(client.email) && emailExists(client.email) && checkNumbers(client.fname) && checkNumbers(client.sname)){
            window.localStorage.setItem(client.email,JSON.stringify(client));
            alert("client created: " +JSON.stringify(client));
        } else {
            alert("no client was created");
        }

    }
}