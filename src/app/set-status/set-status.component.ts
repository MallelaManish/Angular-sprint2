import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-set-status',
  templateUrl: './set-status.component.html',
  styleUrls: ['./set-status.component.css']
})
export class SetStatusComponent implements OnInit {
  
  constructor(private fb:FormBuilder) { }
  setSta=this.fb.group
  ({

  docid:['',Validators.required],
  sta:['',[Validators.required,Validators.minLength(5)]],
  remar:['',Validators.required],
 
  });

 

    ngOnInit(){}

  
}
