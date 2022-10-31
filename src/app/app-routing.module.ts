import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageMeetingsComponent } from "./manage-meetings/manage-meetings.component";
import { MangeClientsComponent } from './mange-clients/mange-clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"manage-meetings" ,component: ManageMeetingsComponent},
  {path:"manage-clients" ,component: MangeClientsComponent},
  {path:"home", redirectTo:""},
  {path:"dashboard" ,component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
