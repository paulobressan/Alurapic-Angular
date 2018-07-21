import { NgModule } from '../../../node_modules/@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '../../../node_modules/@angular/common';

@NgModule({
    declarations:[HeaderComponent],
    exports: [HeaderComponent],
    imports: [CommonModule]
})
export class CoreModule{}