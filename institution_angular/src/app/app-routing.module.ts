import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';








// @ts-ignore
const routes: Routes = [

  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  { path: 'top', loadChildren: () => import('./pages/home/top/top.module').then(m => m.TopModule) },

  { path: 'about', loadChildren: () => import('./pages/home/about/about.module').then(m => m.AboutModule) },

  { path: 'MenuPublic', loadChildren: () => import('./pages/home/menu/menu-public/menu-public.module').then(m => m.MenuPublicModule) },

  { path: 'MenuOwner', loadChildren: () => import('./pages/home/menu/menu-owner/menu-owner.module').then(m => m.MenuOwnerModule) },

  { path: 'MenuItem', loadChildren: () => import('./pages/home/menu/menu-item/menu-item.module').then(m => m.MenuItemModule) },
  // { path: 'auth', loadChildren: () => import('./pages/home/auth/auth.module').then(m => m.AuthModule) },
  // { path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  // { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
