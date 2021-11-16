import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';  
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxKnobModule } from 'jqwidgets-ng/jqxknob';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    jqxGridModule,
    jqxDropDownListModule,
    jqxCheckBoxModule,
    jqxKnobModule,
    jqxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
