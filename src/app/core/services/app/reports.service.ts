import { Injectable, Injector } from '@angular/core';
import { ApiUrls } from '../../configs/api-urls';
import { BaseService } from '../base.service';
@Injectable({
  providedIn: 'root'
})
export class ReportsService extends BaseService {

  constructor(injector:Injector) { super(injector)}


  getAllProducts(){
    return this.get<any>(ApiUrls.Reports.GetAllProducts)
  }
}
