import{ ViewStatus }  from './view-status';
import{ viewList }    from './viewlist-status';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewStatusService {

  constructor() { }
  public getAllViewStatus():ViewStatus[]
  {
     return viewList;
  }
}

