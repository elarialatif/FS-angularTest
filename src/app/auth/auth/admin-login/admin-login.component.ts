import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast.service';
import { customValidationService } from 'src/app/shared/helper/custom-validtion/max-min-length.validtor';
import { IHttpResponse } from 'src/app/core/interfaces/http-response.interface';
import { LanguageService } from 'src/app/shared/services/language.service';
import { AuthService } from 'src/app/core/services/app/auth.service';
import { TokenStorageService } from 'src/app/core/services/app/token-storage.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  public form!: FormGroup;
  data: any[] = []
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  rememberMe: any;
  public isFormSubmitted: boolean = false;
  public noUserFound: boolean = false;
  currentLang!: string;
  constructor(
    private _fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _toastService: ToastService,
    private _languageService: LanguageService,
    private _authService: AuthService,
    private tokenStorage: TokenStorageService)
  { }

  ngOnInit(): void {
    this.currentLang = this._languageService.currentLanguage;
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.AutoLogin();
    this.initForm();
  }
  get currentLanguage() {
    return this._languageService.currentLanguage
  }

  initForm() {
    this.form = this._fb.group({
      userName: ['', Validators.compose([Validators.required, customValidationService.checkLimit(4, 30), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password: ['', Validators.required],
      rememberMe: [false]
    })
  }

  submitAdminLogin() {
    this.isFormSubmitted = true;
    // console.log(this.form.value);
    const { userName, password } = this.form.value;

    this._authService.login(userName, password, this.rememberMe).subscribe({
      next: data => {
        if (data) {
          this._authService.shareCurrentUserData(data.userDetails)
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data.userDetails);
          if (this.rememberMe) {
            localStorage.setItem('rememberMe', 'yes')
          }
          if (data.token) {
            this.router.navigate(["/pages/reports"]);

          }
          else {
            this._toastService.showError(this._languageService.currentLanguage === 'en' ? 'Email or Password is invalid, Please Check' : "البريد الالكتروني او الرقم السري غير صحيح")
          }
        }
      },
      error: err => {
        this.errorMessage = err.errorMessage;
        this.isLoginFailed = true;
      }
    });
  }
  AutoLogin() {
    const accessTokenObj = localStorage.getItem("token");
    // Retrieve rememberMe value from local storage
    const rememberMe = localStorage.getItem('rememberMe');
    if (accessTokenObj && rememberMe == 'yes') {
      this.router.navigate(['/portal/finding']);
    } else {
      console.log("You need to login")
    }
  }

  get adminForm() {
    return this.form?.controls;
  }

  changeCurrentLang(lang: string) {
    this._languageService.changeLanguage(lang);
    this.currentLang = this._languageService.currentLanguage;
  }

  onChecked(e: any) { // here e is a native event
    this.rememberMe = e.target.checked;
  }


}
