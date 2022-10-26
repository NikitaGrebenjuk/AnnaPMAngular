document.addEventListener("DOMContentLoaded", function() {
    setDate();
  });

  function setDate(){
    const today = new Date();
    document.getElementById("date").value = today.toISOString().substring(0,10);
    document.getElementById("stime").value = today.toISOString().substring(11,16);
    document.getElementById("etime").value = ((today.getHours()+1) + ":" + today.getMinutes());
    ;

}

function getInput() {
    try {
        var input = {
            date: (document.getElementById("date").value?document.getElementById("date").value:document.getElementById("date").placeholder),
            stime: (document.getElementById("stime").value?document.getElementById("stime").value:document.getElementById("stime").placeholder),
            email: (document.getElementById("email").value?document.getElementById("email").value:document.getElementById("email").placeholder),
            etime: (document.getElementById("etime").value?document.getElementById("etime").value:document.getElementById("etime").placeholder),
            project: (document.getElementById("projectname").value?document.getElementById("projectname").value:document.getElementById("projectname").placeholder)
        };
        return input;
    } catch (error) {
        alert("Error " + error +"\n");
        return "";
    }
}

function validateInput(meeting) {
    if (meeting.stime != "" && meeting.date != "" && meeting.email != ""){
        return true;
    } else {
        alert("invalid input");
        return false;
    }
}

function checkDate(meeting) {
    const today2 = new Date();
    const meetingDate = new Date(meeting.date + "T" + meeting.stime + ":00.000Z");
    alert(meetingDate + "\n" + today2);


    if(meetingDate>=today2){
        return true;
    } else{
        alert("chosen date is in the past");
        return false;
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
        return true;
    } else{
        alert("Client: " + email + " does not exist");
        return false;
    }
}

function check() {
    var meeting = getInput();
    if(validateInput(meeting)){ // checking if requierd inputs are not empty
        if( checkDate(meeting) && checkEmail(meeting.email) && emailExists(meeting.email)){
            let meetingID = meeting.email + meeting.date + meeting.stime;
            window.localStorage.setItem(meetingID, JSON.stringify(meeting));
            alert("meeting created: " + JSON.stringify(meeting));
        } else {
            alert("no meeting was created");
        }
    }
}