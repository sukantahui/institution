import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuOwnerRoutingModule } from './menu-owner-routing.module';
import { MenuOwnerComponent } from './menu-owner.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MenuItemModule} from '../menu-item/menu-item.module';
import {MatIconModule} from '@angular/material/icon';


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
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MenuItemModule,
        MatIconModule
    ]
})
export class MenuOwnerModule { }
