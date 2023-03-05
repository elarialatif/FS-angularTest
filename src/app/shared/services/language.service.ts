import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  // private currentLangSource = new BehaviorSubject('en');

  // currentCurrentLang = this.currentLangSource.asObservable();

  currentDirection = "ltr"
  constructor(
    public translate: TranslateService ,
    private titleService: Title,
    @Inject(DOCUMENT) private doc: Document
    ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.currentLanguage);
    this.changeLanguage(this.currentLanguage)

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // Change page title when user changes language preference
      translate.get('page_title').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
  }

  public changeLanguage(language: string){
   localStorage.setItem('currentLang', language);
   this.translate.use(this.currentLanguage);
   const condition = language === 'ar' ? 'rtl' : 'ltr';
   const conditionReverse = language === 'en' ? 'rtl' : 'ltr';
   this.currentDirection = condition
   const html = document.getElementById('htmlTag');
  //  this.currentLangSource.next(language);
   if(html?.dir) {
     html.dir = condition;
     html.lang = language
   };
   document.body.classList.add(condition);
   document.body.classList.remove(conditionReverse);
   this.changeCSSFiles()
  }

  public get currentLanguage(): string {
   return localStorage.getItem('currentLang') || 'ar';
  }

  changeCSSFiles(){
    let head= this.doc.getElementsByTagName('head')[0] as HTMLHeadElement;
    let link = this.doc.getElementById('langStyle') as HTMLLinkElement;
    let bundle = this.currentLanguage === 'en'? "enBundle.css": "arBundle.css";
    if(link){
      link.href = bundle;
      // console.log(link,'llll');

    }else{
      let newLink = this.doc.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'lang/CSS';
      newLink.href = bundle;
      head.appendChild(newLink);
      // console.log(newLink,'nnnn');
    }
  }

}
