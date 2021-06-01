import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuOwnerRoutingModule } from './menu-owner-routing.module';
import { MenuOwnerComponent } from './menu-owner.component';


@NgModule({
    declarations: [
        MenuOwnerComponent
    ],
    exports: [
        MenuOwnerComponent
    ],
    imports: [
        CommonModule,
        MenuOwnerRoutingModule
    ]
})
export class MenuOwnerModule { }
