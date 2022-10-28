import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  keys : string[] =[];
  clients : string[] = [];
  meetings : string[] = [];

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  showItems(): void{
    this.keys = Object.keys(window.localStorage);

    for (let key of this.keys){
      if(key.includes("@")){
        this.clients.push(JSON.parse(window.localStorage.getItem(key)!));
      } else if(key.includes("meeting")){
        this.meetings.push(JSON.parse(window.localStorage.getItem(key)!));
      }
    }

  }
}