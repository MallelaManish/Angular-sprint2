export class SetStatus {

 verificationId:number;
   /*startDate:Date;
    endDate:Date;*/
    documentId:number;
    status:string;
    remarks:string;
    public constructor(verificationId:number,/*startDate:Date,endDate:Date,*/documentId:number,status:string,remarks:string)
    {
                this.verificationId = verificationId;
		/*this.startDate = startDate;
                this.endDate = endDate;*/
		this.documentId = documentId;
		this.status = status;
                this.remarks = remarks;
	
    }
}
