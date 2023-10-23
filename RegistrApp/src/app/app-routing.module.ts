import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';


const routes: Routes = [
  {
    path: 'home/:dato',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restore',
    loadChildren: () => import('./restore/restore.module').then( m => m.RestorePageModule)
  },
  {
    path: 'registro-asis',
    loadChildren: () => import('./registro-asis/registro-asis.module').then( m => m.RegistroAsisPageModule)
  },
  {
    path: '**', 
    redirectTo: 'login', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
