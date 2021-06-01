import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TopModule} from './top/top.module';
import {AboutModule} from './about/about.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {AuthModule} from './auth/auth.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    TopModule,
    AboutModule,
    MatSidenavModule,
    MatCardModule,
    AuthModule
  ]
})
export class HomeModule { }
