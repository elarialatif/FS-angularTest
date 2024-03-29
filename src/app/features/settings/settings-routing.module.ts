import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        data: {label: 'Products', hasNav: true}
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {label: 'Users', hasNav: true}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
