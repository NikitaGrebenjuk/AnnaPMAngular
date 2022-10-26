import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-meetings',
  templateUrl: './manage-meetings.component.html',
  styleUrls: ['./manage-meetings.component.css']
})
export class ManageMeetingsComponent implements OnInit {

  constructor(    private route: ActivatedRoute    ) {
   }

  ngOnInit(): void {

  }

}
