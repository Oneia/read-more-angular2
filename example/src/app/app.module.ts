import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReadMoreDirective } from 'read-more-directive-angular2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadMoreDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
