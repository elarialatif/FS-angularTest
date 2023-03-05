import { Injectable, Injector } from '@angular/core';
import { ApiUrls } from '../../configs/api-urls';
import { IProduct } from 'src/app/core/interfaces/application-users.interface';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{

  constructor(injector:Injector) { super(injector)}

  getAllProducts(){
    return this.get<any>(ApiUrls.Products.Products)
  }
  AddNewProduct(Product: any){
    return this.post<any>(ApiUrls.Products.AddNewProduct, Product)
  }

  DeleteProduct(productId: string){
    let product ={
      Id:""
    };
    product.Id=productId;
    return this.delete<any>(ApiUrls.Products.DeleteProduct, product)
  }

  UpdateProduct(product: any){
    return this.put<IProduct>(ApiUrls.Products.UpdateProduct, product)
  }
}
