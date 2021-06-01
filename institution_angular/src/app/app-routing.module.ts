import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';








// @ts-ignore
const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  { path: 'top', loadChildren: () => import('./pages/home/top/top.module').then(m => m.TopModule) },

  { path: 'about', loadChildren: () => import('./pages/home/about/about.module').then(m => m.AboutModule) },

  { path: 'PrintDemo', loadChildren: () => import('./pages/home/child-pages/print-demo/print-demo.module').then(m => m.PrintDemoModule) },

  { path: 'auth', loadChildren: () => import('./pages/home/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
