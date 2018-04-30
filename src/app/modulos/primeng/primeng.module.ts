import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

///////////////////prime ng
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                 //api
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputSwitchModule } from 'primeng/inputswitch';
//////////////////
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CarouselModule,
    InputSwitchModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CarouselModule,
    InputSwitchModule
  ],
  declarations: []
})
export class PrimengModule { }
