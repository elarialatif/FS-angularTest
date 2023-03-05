import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/services/language.service';
import { ProductsService } from 'src/app/core/services/app/products.service';
import { IProduct } from 'src/app/core/interfaces/application-users.interface';
import { ToastService } from 'src/app/core/services/toast.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('password') password!: ElementRef;
  form!: FormGroup;
  products: IProduct[] = [];
  display: boolean = false;
  disabled: boolean = true;
  cols:any[]=[];
  departments:any[]=[];
  id!: string;
  selectedRow:any;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _lang: LanguageService,
    private _productService: ProductsService,
    private renderer: Renderer2,
    private _toaster: ToastService,
  ) {}

  ngOnInit(): void {
    this.initcols();
    this.getAllProducts();
    this.initForm();
  }
  get currentLanguage() {
    return this._lang.currentLanguage
  }

  initForm() {
    this.form = this._fb.group({
      code: [null, Validators.required],
      englishDescription: [null, Validators.required],
      arabicDescription: [null, Validators.required],
    })
  }
  initcols(){
    this.cols=[
      {field:'id', header:'Id'},
      {field:'code', header:'Code'},
      {field:'englishDescription', header:'English Description'},
      {field:'arabicDescription', header:'arabicDescription'},
      { field:  '' , header: 'Action' ,isAction: true  },
    ];

  }
  getAllProducts(){

    this._productService.getAllProducts().subscribe(res => {
      if (res) {
        this.products = res
        console.log(this.products);
      }
    })
  }

  save(){
    // console.log(this.form.value);
    if (this.form.invalid) return;
    if (!this.id) {
      const product ={
        code:this.form.value.code,
        englishDescription:this.form.value.englishDescription,
        arabicDescription:this.form.value.arabicDescription,
      }
      this._productService.AddNewProduct(product).subscribe((res) => {
        if (res) {
          this.display = false;
          console.log(res);
          this.initForm();
          this.getAllProducts();

        }
      })

    }
    else {
      const product ={
        id:this.id,
        code:this.form.value.code,
        englishDescription:this.form.value.englishDescription,
        arabicDescription:this.form.value.arabicDescription,
        isActive: true
      }
      console.log(product)
      this._productService.UpdateProduct(product).subscribe(res => {
        if (res) {
          this.display = false;
          this.initForm();
          console.log(this.form.value);
          this.renderer.removeClass(this.password.nativeElement, 'hide');
          this.getAllProducts();
        }
      })
    }
  }
  editDialog(data:any):void{
    this.selectedRow=data;
    this.showDialog(this.selectedRow);
  }
  showDialog(data:any): void {
    console.log(data)
    this.id=data.id;
    console.log( this.id);
    this.form = this._fb.group({
      id:[data.id],
      code: [data.code],
      englishDescription: [data.englishDescription],
      arabicDescription: [data.arabicDescription],
    })
    console.log(data.code)
    this.display = true;
  }
  Delete(data:any): void {
    this.id=data.id;
    this._productService.DeleteProduct(this.id).subscribe(res => {
      this.getAllProducts();
    })
  }
  cancelDialog() {
    if (!this.display) {
      this.initForm();
      window.location.reload();
    }
  }
}
