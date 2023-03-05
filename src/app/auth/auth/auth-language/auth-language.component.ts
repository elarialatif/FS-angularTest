import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-auth-language',
  templateUrl: './auth-language.component.html',
  styleUrls: ['./auth-language.component.scss']
})
export class AuthLanguageComponent implements OnInit {

  currentLang!: string;
  constructor(private _languageService: LanguageService) { }

  ngOnInit(): void {
    this.currentLang = this._languageService.currentLanguage;
  }

  changeCurrentLang(lang: string) {
    this._languageService.changeLanguage(lang);
    this.currentLang = this._languageService.currentLanguage;
  }
}
