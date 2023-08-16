import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ShellComponent
  ]
})
export class LibModule { }
