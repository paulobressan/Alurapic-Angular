import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SiginComponent } from './signin/sigin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [SiginComponent],
    imports: [
        ReactiveFormsModule,
         CommonModule,
         VMessageModule
        ]
})
export class HomeModule { }