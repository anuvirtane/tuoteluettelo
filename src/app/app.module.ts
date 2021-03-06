import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
  HttpClientModule,
FormsModule,
AppRoutingModule,
Ng2SearchPipeModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
