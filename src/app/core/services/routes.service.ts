import { Injectable } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
// import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  public parentPath!: string;
  public url!: any;
  public routes!: Routes | undefined;
  public history: string[] = [];
  public routesArr: any[] = [];
  public menu:MenuItem[]= [];
  constructor(private _router: Router) {

   }

  setRoutes(routes: ActivatedRoute | undefined) {
    this.routesArr = [];
    this.parentPath = '/' + routes?.pathFromRoot.map(r => r.snapshot.url).flat().map(f => f.path).join('/');
    routes?.routeConfig?.children?.forEach(route => {
      this.addRoutesToNav(route) ? this.routesArr?.push(route) : '';
    })
    this.routes = this.routesArr;
  }

  addRoutesToNav(route: any): boolean {
    if (route.data && route.data['hasNav'] != false)
      return true;
    else
      return false;
  }

  buildNavItems(): MenuItem[] {
    this.menu= [];
    if (this.routes){
      this.routes
      .filter((route) => route.data)
      .map(({ path = '', data }) => ({
        path: this.parentPath + '/' + path,
        label: data!['label'],
        disabled:data!['disabled'],
        icon: data!['label'].toLowerCase().replace(/\s/g, '') + '-icon.png'
      }));
      // this._translate.instant(item?.data!["label"])
      this.routes?.map(item => this.menu.push( {label : item?.data!["label"] , url:  this.parentPath + '/'  +item.path , disabled: item.data!['disabled'], icon: item.data!['label'].toLowerCase().replace(/\s/g, '') + '-icon.png'} ))
    return this.menu;
    }
    return[]
  }

  back() {
    if (history.state.navigationId > 1) {
      history.back();
    } else {
      this._router.navigateByUrl('/');
    }
  }
}
