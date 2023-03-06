import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/services/language.service';
import { ProductsService } from 'src/app/core/services/app/products.service';
import { IProduct } from 'src/app/core/interfaces/application-users.interface';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/app/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('password') password!: ElementRef;
  form!: FormGroup;
  products: IProduct[] = [];
  display: boolean = false;
  disabled: boolean = true;
  cols:any[]=[];
  departments:any[]=[];
  id!: string;
  selectedRow:any;
  usersData : [] =[];

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _lang: LanguageService,
    private _productService: ProductsService,
    private _userService: UserService,
    private renderer: Renderer2,
    private _toaster: ToastService,
  ) {}

  ngOnInit(): void {
    this.initcols();
    this.getAllProducts();
    this.getUsersData();
    this.initForm();
  }
  get currentLanguage() {
    return this._lang.currentLanguage
  }

  initForm() {
    this.form = this._fb.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      website: [null, Validators.required],
    })
  }
  initcols(){
    this.cols=[
      { field:'name', header:'Name'},
      { field:'username', header:'User Name'},
      { field:'email', header:'Email'},
      { field:'phone', header:'Phone'},
      { field:'website', header:'Website'},
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
  getUsersData(){

    this._userService.getProfile().subscribe(res => {
      if (res) {
        this.usersData = res
        console.log(this.usersData);
      }
    })
  }

  save(){
    // console.log(this.form.value);
    if (this.form.invalid) return;
    if (!this.id) {
      const user = {
        name:this.form.value.name,
        username:this.form.value.username,
        email:this.form.value.email,
        phone:this.form.value.phone,
        website:this.form.value.website,
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
      this._userService.AddNewUser(user).subscribe((res) => {
        if (res) {
          this.display = false;
          console.log(res);
          this.initForm();
          this.getUsersData();

        }
      })

    }
    else {
      const user ={
        id:this.id,
        name:this.form.value.name,
        username:this.form.value.username,
        email:this.form.value.email,
        phone:this.form.value.phone,
        website:this.form.value.website,
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      }
      console.log(user)
      this._userService.UpdateUser(user).subscribe(res => {
        if (res) {
          // this.display = false;
          // this.initForm();
          // console.log(this.form.value);
          // this.getUsersData();
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
      name:[data.name],
      username:[data.username],
      email:[data.email],
      phone:[data.phone],
      website:[data.website],
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    })
    console.log(data.name)
    this.display = true;
  }
  Delete(data:any): void {
    this.id=data.id;
    this._userService.DeleteUser(this.id).subscribe(res => {
      this.getUsersData();
    })
  }
  cancelDialog() {
    if (!this.display) {
      this.initForm();
      window.location.reload();
    }
  }
}
