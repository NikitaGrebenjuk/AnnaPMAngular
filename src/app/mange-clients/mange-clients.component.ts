import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Client } from '../moduls/client';

@Component({
  selector: 'app-mange-clients',
  templateUrl: './mange-clients.component.html',
  styleUrls: ['./mange-clients.component.css']
})
export class MangeClientsComponent implements OnInit {

  clientsForm = new FormGroup({
    fname: new FormControl("test"),
    lname: new FormControl("test"),
    email: new FormControl("test"),
    phone: new FormControl("test"),
    project: new FormControl("test")}
  );

  constructor() { }

  ngOnInit(): void {
  }
  addClients():void{

  }

}
