import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutModule } from './modules/app-layout/app-layout.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    loadChildren: () => import('./modules/app-layout/app-layout.module').then(m => m.AppLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
