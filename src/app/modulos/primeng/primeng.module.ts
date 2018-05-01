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
import { GrowlModule } from 'primeng/growl';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
//////////////////
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CarouselModule,
    InputSwitchModule,
    GrowlModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CarouselModule,
    InputSwitchModule,
    GrowlModule
  ],
  providers: [
    MessageService
  ],
  declarations: []
})
export class PrimengModule { }
