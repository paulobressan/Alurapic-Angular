import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SiginComponent } from './signin/sigin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [SiginComponent],
    imports: [
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        VMessageModule
    ]
})
export class HomeModule { }