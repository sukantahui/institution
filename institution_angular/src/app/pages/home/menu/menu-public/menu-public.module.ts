import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPublicRoutingModule } from './menu-public-routing.module';
import { MenuPublicComponent } from './menu-public.component';
import {AuthModule} from '../../auth/auth.module';
import {MatButtonModule} from '@angular/material/button';


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
        AuthModule,
        MatButtonModule
    ]
})
export class MenuPublicModule { }
