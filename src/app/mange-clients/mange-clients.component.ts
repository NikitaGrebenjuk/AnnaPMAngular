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
    fname: new FormControl("Max"),
    lname: new FormControl("Mustermann"),
    email: new FormControl("max@mustermann.de"),
    phone: new FormControl("+33 123 3123 132"),
    project: new FormControl("first PRoject")
  } );

  deletClientForm = new FormGroup({
    email: new FormControl("max@mustermann.de")
  } );


  result : object = {};
  client : Object = {};

  constructor() { }

  ngOnInit(): void {
  }

  addClients():void{
    var client = new Client(
      this.clientsForm.value.fname!,
      this.clientsForm.value.lname!,
      this.clientsForm.value.email!,
      this.clientsForm.value.phone!,
      this.clientsForm.value.project!
    );
    if(client.validateClient() && !client.emailExists() && client.checkEmail()){
      alert("client saved");
      this.result = client;
      window.localStorage.setItem(client.email,JSON.stringify(client));
    }
  }

  deletClient():void{
    var email = this.deletClientForm.value.email!;
    if(Client.emailExists(email)){
      var client = JSON.parse(window.localStorage.getItem(this.deletClientForm.value.email!)!);
      this.client = new Client(client.fname,client.lname,client.email,client.phone,client.project);
      if(window.localStorage.getItem("meeting " + client.email)!){
        alert("There is meeting with this client. Please cancel it first.")
      } else {
        window.localStorage.removeItem(client.email);
        alert("client removed")
      }
    } else{
      alert("no client with given Email");
    }
  }
}
