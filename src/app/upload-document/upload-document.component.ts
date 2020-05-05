import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  uploadForm=this.fb.group
  ({

  docId:['',Validators.required],
  docType:['',Validators.required],
  docTypeId:['',Validators.required],
  docSubType:['',Validators.required],
  uploadDate:['',Validators.required],
  docFile:['',Validators.required],
 
  });

  ngOnInit(): void {
  }

}
