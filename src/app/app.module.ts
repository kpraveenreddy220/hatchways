import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SumPipe} from "./sum.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import {NameFilter} from "./name.pipe";
import {TagFilter} from "./tag.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SumPipe,
    NameFilter,
    TagFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
