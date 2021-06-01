import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {AuthModule} from '../auth/auth.module';
import {MenuPublicModule} from './menu-public/menu-public.module';
import {MenuOwnerModule} from './menu-owner/menu-owner.module';


@NgModule({
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        MenuRoutingModule,
        MenuPublicModule,
        MenuOwnerModule
    ]
})
export class MenuModule { }