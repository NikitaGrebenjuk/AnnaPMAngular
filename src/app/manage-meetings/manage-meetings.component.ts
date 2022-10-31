import { Component, OnInit } from '@angular/core';
import { Meeting } from '../moduls/meeting';
import { FormControl,FormGroup } from '@angular/forms';
import { Client } from '../moduls/client';

@Component({
  selector: 'app-manage-meetings',
  templateUrl: './manage-meetings.component.html',
  styleUrls: ['./manage-meetings.component.css']
})
export class ManageMeetingsComponent implements OnInit {

  meetingsForm = new FormGroup({
    date: new FormControl("2022-01-01"),
    stime: new FormControl("12:00"),
    etime: new FormControl("13:00"),
    email: new FormControl("max@mustermann.de"),
    project: new FormControl("first PRoject")
  });

  deleteMeetingForm = new FormGroup({
    email: new FormControl("max@mustermann.de")
  });

  result : object = {};
  meeting: object ={};

  constructor() { }

  ngOnInit(): void {
  }

  addMeeting():void{
    if(Client.emailExists(this.meetingsForm.value.email!)){
      var client = JSON.parse(window.localStorage.getItem(this.meetingsForm.value.email!)!);
      var meeting = new Meeting(
          new Date(this.meetingsForm.value.date!),
          this.meetingsForm.value.stime!,
          this.meetingsForm.value.etime!,
          new Client(client.fname!, client.lname!, client.email!, client.phone!, client.project!),
          this.meetingsForm.value.project!
        );
        if(meeting.validateMeeting()){
          this.result = meeting;
          window.localStorage.setItem("meeting " + meeting.client.email + " " + meeting.date.toDateString(),JSON.stringify(meeting));
          alert("meeting created");
        } else{
          alert ("no meeting created: validation failed")
        }
    } else {
      alert ("no meeting created: no client with given email exists")
    }
  }

  deleteMeeting():void{
    var email = this.deleteMeetingForm.value.email!;
    if(Client.emailExists(email)){
      var keys = [];
      for(var  key of Object.keys(window.localStorage)){
        if(key.includes("meeting " + email)){
          keys.push(key);
        }
      }
      if(keys.length>0){
        for(var key of keys){
          window.localStorage.removeItem(key);
        }
        alert(keys.length + " meetings deleted");
      } else{
        alert("no meetings with this client");
      }
   }
  }
}
