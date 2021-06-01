import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuOwnerRoutingModule } from './menu-owner-routing.module';
import { MenuOwnerComponent } from './menu-owner.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
    declarations: [
        MenuOwnerComponent
    ],
    exports: [
        MenuOwnerComponent
    ],
    imports: [
        CommonModule,
        MenuOwnerRoutingModule,
        MatMenuModule
    ]
})
export class MenuOwnerModule { }
