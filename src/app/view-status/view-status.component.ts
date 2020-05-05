import { Component, OnInit } from '@angular/core';
import { ViewStatusService } from './view-status.service';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
   
   viewStatus
   constructor(private viewService:ViewStatusService) { }

   ngOnInit(): void {
   this.viewStatus=this.viewService.getAllViewStatus();

  }

}


