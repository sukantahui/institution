import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPublicRoutingModule } from './menu-public-routing.module';
import { MenuPublicComponent } from './menu-public.component';
import {AuthModule} from '../../auth/auth.module';


@NgModule({
    declarations: [
        MenuPublicComponent
    ],
    exports: [
        MenuPublicComponent
    ],
    imports: [
        CommonModule,
        MenuPublicRoutingModule,
        AuthModule
    ]
})
export class MenuPublicModule { }
