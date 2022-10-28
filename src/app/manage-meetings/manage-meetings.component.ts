import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from '../moduls/meeting';
import { FormControl,FormGroup } from '@angular/forms';

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
    client: new FormControl('{"email": "max@mustermann.de"}'),
    project: new FormControl("first PRoject")
  }
  );

  result : object = {};

  constructor() { }

  ngOnInit(): void {
  }
  
  addMeeting():void{
    var meeting = new Meeting(
      new Date(this.meetingsForm.value.date!),
      this.meetingsForm.value.stime!,
      this.meetingsForm.value.etime!,
      JSON.parse(this.meetingsForm.value.client!),
      this.meetingsForm.value.project!
    );
    if(meeting.validateMeeting()){
      this.result = meeting;
      window.localStorage.setItem("meeting " + meeting.client.lname,JSON.stringify(meeting));
    }
  }
}
