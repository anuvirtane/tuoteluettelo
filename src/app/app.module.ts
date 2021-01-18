import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  HttpClientModule,
FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
