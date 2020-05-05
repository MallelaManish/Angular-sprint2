export class UploadDocument {
  
  docId:number;
  docTypeId:number;
  docType:string
  docSubType:string;
  docFile:file;
  uploadDate:date

  public constructor(docId:number,docTypeId:number,docType:string,
  docSubType:string,docFile:file,uploadDate:date)
  {
     this.docId=docId;
     this.docTypeId= docTypeId;
     this.docType=docType;
     this.docFile=docFile;
     this.uploadDate=uploadDate;

  }






}


   
}