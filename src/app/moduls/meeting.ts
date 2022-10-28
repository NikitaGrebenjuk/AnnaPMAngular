import { Time } from "@angular/common";
import { Client } from "./client";

export class Meeting{
  date: Date;
  stime: string;
  etime: string;
  client: Client;
  project: string;

  constructor(
    date: Date = new Date("2022-01-01"),
    stime: string = new Date().toTimeString(),
    etime: string = new Date().toTimeString(),
    client: Client = new Client(),
    project: string ="") {
      this.date=date;
      this.stime=stime;
      this.etime=etime;
      this.client=client;
      this.project=project;
  }


  //   setDate(){
  //     const today = new Date();
  //     document.getElementById("date").value = today.toISOString().substring(0,10);
  //     document.getElementById("stime").value = today.toISOString().substring(11,16);
  //     document.getElementById("etime").value = ((today.getHours()+1) + ":" + today.getMinutes());
  //     ;

  // }

  validateInput():boolean {
      if (this.stime != "" && this.date != null && this.client.email != ""){
          return true;
      } else {
          alert("invalid input" + this.client.email.toString());
          return false;
      }
  }

  checkDate() {
      const today = new Date();
      if(this.date>=today){
          return true;
      } else{
          alert("chosen date is in the past");
          return false;
      }

  }

  checkEmail() {
      let validRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.client.email.match(validRegEx) != null) {
          return true;
      } else{
          alert("email invalid");
          return false;
      }
  }

  emailExists() {
      if ((window.localStorage.getItem(this.client.email)?true:false)){
          return true;
      } else{
          alert("Client: " + this.client.email + " does not exist");
          return false;
      }
  }

  validateMeeting():boolean {
      if(this.validateInput()){ // checking if requierd inputs are not empty
          if( this.checkDate() && this.checkEmail() && this.emailExists()){
              let meetingID = this.client.email + this.date + this.stime;
              return true;
          } else {
              alert("no meeting was created");
          }    
      }
      return false;
  }


}
