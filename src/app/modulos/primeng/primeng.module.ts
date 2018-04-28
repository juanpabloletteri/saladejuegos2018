import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

///////////////////prime ng
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                 //api
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
//////////////////
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  declarations: []
})
export class PrimengModule { }
