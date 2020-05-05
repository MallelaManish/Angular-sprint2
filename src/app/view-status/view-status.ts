export class ViewStatus {

    verificationId:number;
    
    status:string;
    remark:string
    public constructor(verificationId:number,status:string,remark:string)
    {
        this.verificationId=verificationId;
      
        this.status=status;
        this.remark=remark;
    }
}
