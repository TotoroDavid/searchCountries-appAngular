import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from '../shared/sideBar/sidebar.component';

@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        SidebarComponent,
    ],
    providers: [],
})
export class SharedModule { }